import type { MaybePromise } from '@yusui/types'

declare module '@smallwei/avue' {
  export type DicData = DicItem[] | (() => MaybePromise<DicItem[]>)

  export interface DicItem extends Record<string, any> {
    label?: string
    value?: any
    display?: boolean
    disabled?: boolean
    desc?: string
    children?: DicItem[]
  }

  export interface DicProps extends Record<string, any> {
    /** 选项标签为选项对象的某个属性值 */
    label?: string
    /** 选项的值为选项对象的某个属性值 */
    value?: string
    /** 选项的子选项为选项对象的某个属性值 */
    children?: string
    /** 选项的禁用为选项对象的某个属性值 */
    disabled?: string
    /** 选项的描述为选项对象的某个属性值  */
    desc?: string
    /** 选项返回结构的层级(例如data.data) */
    res?: string
  }

  export interface DicOption {
    /** 数据字典属性的配置对象 */
    props?: DicProps
    /** 数据字典值 */
    dicData?: DicItem[]
    /** 数据字典接口url地址 */
    dicUrl?: string
    /** 数据字典接口url携带请求参数 */
    dicQuery?: object
    /** 数据字典接口url携带头部参数 */
    dicHeaders?: object
    /** 数据字典接口url返回数据格式化方法 */
    dicFormatter?: (res: any) => DicItem[]
    /** 数据字典接口请求方式 */
    dicMethod?: string
  }
}
