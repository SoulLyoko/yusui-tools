import type { GenerateServiceProps } from '@umijs/openapi'

import fs from 'node:fs'
import path from 'node:path'

import { ServiceGenerator } from '@umijs/openapi/dist/serviceGenerator'
import { get, upperFirst } from 'lodash-unified'

export interface GenerateApiConfig extends Omit<GenerateServiceProps, 'schemaPath' | 'projectName'> {
  // { system: 'http://127.0.0.1/system/v3/api-docs' }
  schemas?: Record<string, string>
}

const defaultConfig: GenerateApiConfig = {
  serversPath: './openapi',
  namespace: 'API',
  enumStyle: 'string-literal',
  nullable: false,
  isCamelCase: true,
  requestOptionsType: 'RequestConfig',
  requestImportStatement: `import type { RequestConfig } from '@yusui/request'\nimport { request } from '../..'`,
  hook: {
    afterOpenApiDataInited(openAPIData) {
      // 合并get方法的参数
      Object.values(openAPIData.paths).forEach((pathObject) => {
        if (pathObject?.get?.parameters) {
          pathObject.get.parameters = pathObject?.get?.parameters.map((paramObject: any) => {
            if ('schema' in paramObject && paramObject.schema && '$ref' in paramObject.schema) {
              const schemaObject = get(openAPIData, paramObject.schema.$ref.replace(/#\//, '').split('/'))
              const refs = Object.entries(schemaObject.properties ?? {}).map(([name, schema]) => {
                return { name, schema, in: 'query', required: false, description: (schema as any).description }
              })
              return [...refs, { ...paramObject, required: false }]
            }
            return paramObject
          }).flat()
        }
      })

      // 属性改为可选
      Object.values(openAPIData.components?.schemas ?? {}).forEach((schemaObject) => {
        if ('required' in schemaObject)
          schemaObject.required = undefined
      })
      return openAPIData
    },
    // 自定义函数名
    customFunctionName(operationObject) {
      const { path, method } = operationObject
      // `get /system/user/list` -> `getList`
      return method + path.split('/').slice(3).map((p: string) => {
        let name = upperFirst(p.replace(/^\{(.*)\}$/, '$1'))
        if (/^\{(.*)\}$/.test(p))
          name = `By${name}`
        return name
      }).join('')
    },
    // 自定义类型名
    customTypeName(operationObject) {
      const { path, method } = operationObject
      // `get /system/user/list` -> `getSystemUserListParams`
      return method + path.split('/').map((p: string) => {
        let name = upperFirst(p.replace(/^\{(.*)\}$/, '$1'))
        if (/^\{(.*)\}$/.test(p))
          name = `By${name}`
        return name
      }).join('')
    },
    // @ts-ignore
    customType(schemaObject) {
      // int64转为string
      if (schemaObject) {
        if (schemaObject.format === 'int64')
          return 'string'
        if (schemaObject.type === 'array' && (schemaObject.items as any)?.format === 'int64')
          return 'string[]'
        return schemaObject
      }
    },
    // 自定义文件名
    customFileNames(_, apiPath) {
      // `/system/user/list` -> `system/user.ts`
      return [apiPath.split('/')[2]]
    },
  },
}

export function generateApi(config?: GenerateApiConfig) {
  const { schemas, serversPath } = config ?? {}
  if (!schemas || !Object.keys(schemas)?.length)
    return

  if (!fs.existsSync(serversPath!))
    fs.mkdirSync(serversPath!)

  const names = Object.keys(schemas)
  const references = names.map(name => `/// <reference types="./${name}/typings" />`).join('\n')
  const imports = names.map(name => `import ${name} from './${name}'`).join('\n')
  const exports = names.map(name => `${name}`).join(', ')
  fs.writeFileSync(path.join(serversPath!, 'index.ts'), `${references}\n${imports}\nexport const api = { ${exports} }`)

  Object.entries(schemas).forEach(async ([name, schema]) => {
    const res = await fetch(schema).then(r => r.json()).catch(e => e)
    if (!res?.info)
      return console.log(`\x1B[34m%s\x1B[31m%s\x1B[0m`, `[openAPI]: `, `生成失败，无法读取${schema}`)

    const gen = new ServiceGenerator({
      ...defaultConfig,
      ...config,
      hook: {
        ...defaultConfig.hook,
        ...config?.hook,
      },
      schemaPath: schema,
      projectName: name,
    }, res)
    gen.genFile()
  })
}
