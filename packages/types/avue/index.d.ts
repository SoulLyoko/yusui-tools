/// <reference path="./dic.d.ts" />
/// <reference path="./form.d.ts" />
/// <reference path="./crud.d.ts" />
/// <reference path="./tree.d.ts" />
/// <reference path="./global.d.ts" />

declare module '@smallwei/avue' {
  export interface AvueConfig {
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
    [x: string]: any
  }

  export default Avue
}
