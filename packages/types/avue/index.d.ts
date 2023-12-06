/// <reference types="./dic" />
/// <reference types="./form" />
/// <reference types="./crud" />
/// <reference types="./tree" />
/// <reference types="./global" />

import type { ElSize } from '../helpers'

type AnyFn = (...args: any[]) => any

declare module '@smallwei/avue' {
  const avueConfig: {
    appendToBody?: boolean
    axios?: import('axios').AxiosInstance
    calcHeight?: number
    menuType?: MenuType
    size?: ElSize
    theme?: 'dark'
  }
  const Avue: {
    install(app: import('vue').App, config?: AvueConfig): void
    locale: { use: AnyFn, t: AnyFn, i18n: AnyFn }
    version: string
    [name: string]: import('vue').DefineComponent
  }
  export type AvueConfig = typeof avueConfig
  export default Avue
}
