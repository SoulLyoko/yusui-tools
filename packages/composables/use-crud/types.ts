import type { AvueCrudDefaults, AvueCrudOption, AvueCrudProps, FormType, PageOption } from '@smallwei/avue'
import type { EmitterAsync } from '@yusui/utils'

export interface CrudOption<T, P> {
  /** 行键值(id/_id/uuid/...) */
  rowKey: string
  /** 获取数据列表方法 */
  getList: (() => Promise<any>) | ((params?: P) => Promise<any>) | ((params: P) => Promise<any>)
  /** 添加数据方法 */
  create: (form: T | any) => Promise<any>
  /** 编辑数据方法 */
  update: (form: T | any) => Promise<any>
  /** 删除单条数据方法 */
  remove: (id: any) => Promise<any>
  /** 接口返回数据的路径 */
  dataPath: string
  /** 接口返回总数的路径 */
  totalPath: string
  /** 当前页key */
  currKey: string
  /** 每页条数key */
  sizeKey: string
  /** 是否携带分页参数 */
  isPage: Boolean
  /** 是否携带排序参数 */
  isSort: Boolean
  /** 删除前是否提示确认 */
  delConfirm: Boolean
  /** 获取数据后是否清除选择 */
  clearSelection: Boolean
}

export interface SortOption {
  ascs?: string
  descs?: string
  order?: 'asc' | 'desc'
  prop?: string
}

export interface CrudState<T, P> {
  crudOption: CrudOption<T, P>
  pageOption: Required<PageOption>
  sortOption: SortOption
  tableLoading: boolean
  tableOption: AvueCrudOption<T>
  tableData: T[]
  dataSelections: T[]
  searchForm: P
  queryForm: any
  formData: T
  formType: FormType
  defaults: AvueCrudDefaults
  mockData: T[]
  mockCache: string
}

export type Emitter<T, P> = EmitterAsync<{
  beforeGetList: P
  afterGetList: any
  beforeSave: T
  afterSave: any
  beforeUpdate: T
  afterUpdate: any
  beforeDel: T
  afterDel: any
  beforeBatchDel: T[]
  afterBatchDel: any
  beforeSearch: P
  afterSearch: P
  beforeSearchReset: P
  afterSearchReset: P
  beforeOpen: FormType
  afterOpen: FormType
  beforeClose: FormType
  afterClose: FormType
}>

export interface UseCrudStateOptions<T, P> extends Partial<Omit<CrudState<T, P>, 'crudOption' | 'pageOption'>> {
  crudOption?: Partial<CrudOption<T, P>>
  pageOption?: PageOption
}

export interface UseCrudMethodsOptions<T, P> {
  getDataList?: () => any
  handleSave?: AvueCrudProps<T>['onRowSave']
  handleUpdate?: AvueCrudProps<T>['onRowUpdate']
  handleDel?: AvueCrudProps<T>['onRowDel']
  batchDel?: () => any
  filterRow?: (row: T) => T
  filterParams?: (params: P) => P
  searchChange?: (form: P, done: () => void) => any
  searchReset?: () => any
  selectionChange?: AvueCrudProps<T>['onSelectionChange']
  pageSizeChange?: AvueCrudProps<T>['onSizeChange']
  pageCurrentChange?: AvueCrudProps<T>['onCurrentChange']
  sortChange?: AvueCrudProps<T>['onSortChange']
  beforeOpen?: AvueCrudProps<T>['before-open']
  beforeClose?: AvueCrudProps<T>['before-close']
}

export type UseCrudOptions<T, P> = UseCrudStateOptions<T, P> & UseCrudMethodsOptions<T, P>
