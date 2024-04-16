/// <reference path="./dic.d.ts" />
/// <reference path="./form.d.ts" />
/// <reference path="./crud.d.ts" />
/// <reference path="./tree.d.ts" />
/// <reference path="./global.d.ts" />

declare module '@smallwei/avue' {
  const avueConfig: {
    appendToBody?: boolean
    axios?: import('axios').AxiosInstance
    calcHeight?: number
    menuType?: MenuType
    size?: import('../helpers').ElSize
    theme?: 'dark'
    crudOption?: AvueCrudOption
    formOption?: AvueFormOption
  }
  const Avue: {
    install: (app: import('vue').App, config?: AvueConfig) => void
    locale: { use: AnyFn, t: AnyFn, i18n: AnyFn }
    version: string
    [name: string]: import('vue').DefineComponent
  }

  export type AnyFn = (...args: any[]) => any
  export type Fn = () => void
  export type AvueConfig = typeof avueConfig
  export default Avue
}
