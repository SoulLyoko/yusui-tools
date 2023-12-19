import type { FormType, PageOption } from '@smallwei/avue'
import type { UvueFormOption, UvueListOption } from '@yusui/uvue'
import type { EmitterAsync } from '@yusui/utils'
import type { CrudOption as _CrudOption, CrudState as _CrudState } from '@yusui/composables'

export interface CrudOption<T, P> extends _CrudOption<T, P> {
  getInfo: (() => Promise<any>) | ((params?: any) => Promise<any>) | ((params: any) => Promise<any>)
  /** 搜索栏绑定的字段 */
  searchKey: string
  /** 跳转到表单页的路径 */
  formPath: string
  /** 跳转到表单携带的参数，默认为整个表单 */
  formKeys: string | string[]
  /** 是否携带分页参数 */
  isPage: boolean
  /** 是否携带排序参数 */
  isSort: boolean
  /** 是否触底加载更多数据 */
  isReachBottom: boolean
  /** 是否下拉刷新，需要在pages配置中开启enablePullDownRefresh */
  isPullDownRefresh: boolean
  /** 是否显示返回顶部按钮 */
  isSrollTop: boolean
  /** 提交后是否返回 */
  submitBack: boolean
  /** 表单删除后是否返回 */
  delBack: boolean
}

export interface CrudState<T, P>
  extends Pick<_CrudState<T, P>, 'pageOption' | 'sortOption' | 'searchForm' | 'queryForm' | 'formData'> {
  crudOption: CrudOption<T, P>
  /** 列表加载状态 */
  loadStatus: 'loadmore' | 'loading' | 'nomore'
  /** 列表配置 */
  listOption: UvueListOption<T>
  /** 列表数据 */
  listData: T[]
  /** 距离顶部距离，在onPageScroll中获取 */
  scrollTop: number
  /** 表单配置 */
  formOption: UvueFormOption<T>
  /** 表单类型 */
  formType: FormType // add,edit,view
}

export type Emitter<T, P> = EmitterAsync<{
  beforeGetList: P
  afterGetList: any
  beforeDel: T
  afterDel: any
  beforeGetInfo: any
  afterGetInfo: any
  beforeSubmit: T
  afterSubmit: any
}>

export interface UseCrudStateOptions<T, P> extends Partial<Omit<CrudState<T, P>, 'crudOption' | 'pageOption'>> {
  crudOption?: Partial<CrudOption<T, P>>
  pageOption?: PageOption
}

export interface UseCrudMethodsOptions<T> {
  getDataList?: () => any
  handleDel?: (row: T) => any
  loadMore?: () => any
  handleRefresh?: () => any
  handleSearch?: () => any
  filterChange?: () => any
  encodeData?: (data: any) => any
  decodeData?: (data: any) => any
  getFormUrl?: (row: T, formType: string) => string
  openForm?: (row: T, formType: string) => any
  handleAdd?: (row: T) => any
  handleEdit?: (row: T) => any
  handleView?: (row: T) => any
  getFormData?: (options: any) => any
  handleSubmit?: (form: T, loading?: () => void, back?: () => void) => any
}

export type UseCrudOptions<T, P> = UseCrudStateOptions<T, P> & UseCrudMethodsOptions<T>
