import { alias } from '../../vite.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: Object.fromEntries(Object.values(alias).map(e => [e.find, e.replacement])),
  extends: ['../../packages/nuxt'],
  imports: { dirs: ['api', 'stores'] },
  srcDir: 'src/',
  openapi: {
    serversPath: 'src/api/openapi',
    schemas: {
      pet: 'https://petstore3.swagger.io/api/v3/openapi.json',
    },
    hook: {
      // 自定义函数名
      customFunctionName(operationObject) {
        const { method, path } = operationObject
        return method + path
      },
      // 自定义文件名
      customFileNames(_, apiPath) {
        return [apiPath.split('/')[1]]
      },
    },
  },
})
