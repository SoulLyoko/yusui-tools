import { defineNuxtModule } from '@nuxt/kit'
import { generateApi } from '@yusui/request/openapi'
import { upperFirst } from 'lodash-es'

export default defineNuxtModule({
  setup() {
    generateApi({
      serversPath: 'api/openapi',
      schemas: {
        pet: 'https://petstore3.swagger.io/api/v3/openapi.json',
      },
      hook: {
        // 自定义函数名
        customFunctionName(operationObject) {
          const { path, method } = operationObject
          // `get /system/user/list` -> `getList`
          return method + path.split('/').slice(2).map((p: string) => {
            let name = upperFirst(p.replace(/^\{(.*)\}$/, '$1'))
            if (/^\{(.*)\}$/.test(p))
              name = `By${name}`
            return name
          }).join('')
        },
        // 自定义文件名
        customFileNames(_, apiPath) {
          return [apiPath.split('/')[1]]
        },
      },
    })
  },
})
