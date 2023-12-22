import type { AvueCrudOption, AvueFormOption, TableRowData } from '@smallwei/avue'

export interface CrudListOption<T = any> {
  /** 图标 */
  icon?: string | ((row: TableRowData<T>, index: number) => any)
  /** 标题 */
  title?: string | ((row: TableRowData<T>, index: number) => any)
  /** 副标题 */
  subtitle?: string | ((row: TableRowData<T>, index: number) => any)
  /** 内容 */
  content?: string | ((row: TableRowData<T>, index: number) => any)
}

export type CrudCardOption<T = any> =
  Partial<Pick<AvueFormOption, 'size' | 'labelWidth' | 'labelPosition' | 'labelSuffix' | 'span' | 'gutter'>> &
  CrudListOption<T> &
  {
    /** 按钮位置 */
    actionPosition?: 'header' | 'footer'
  }

export interface CrudPlusOption<T = any> extends AvueCrudOption<T> {
  type?: 'card' | 'list'
  /** 卡片类型配置 */
  cardOption?: CrudCardOption<T>
  /** 列表类型配置 */
  listOption?: CrudListOption<T>
}
