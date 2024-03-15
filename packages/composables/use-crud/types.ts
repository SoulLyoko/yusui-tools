import type { AvueCrudDefaults, AvueCrudEmits, AvueCrudOption, AvueCrudProps, FormType, PageOption } from '@smallwei/avue'
import type { EmitterAsync } from '@yusui/utils'

export interface CrudOption<T, P> {
  /** 行键值(id/_id/uuid/...) */
  rowKey: string
  /** 获取数据列表方法 */
  getList: (() => Promise<any>) | ((params?: P) => Promise<any>) | ((params: P) => Promise<any>)
  /** 获取详情方法 */
  getInfo: (() => Promise<any>) | ((id?: any) => Promise<any>) | ((id: any) => Promise<any>)
  /** 添加数据方法 */
  create: (form: T | any) => Promise<any>
  /** 编辑数据方法 */
  update: (form: T | any) => Promise<any>
  /** 删除数据方法 */
  remove: (id: any) => Promise<any>
  /** 接口返回列表数据的路径 */
  dataPath: string
  /** 接口返回详情数据的路径 */
  infoPath: string
  /** 接口返回总数的路径 */
  totalPath: string
  /** 当前页key */
  currKey: string
  /** 每页条数key */
  sizeKey: string
  /** 是否携带分页参数 */
  isPage: boolean
  /** 是否携带排序参数 */
  isSort: boolean
  /** 行删除前是否提示确认 */
  delConfirm: boolean | ((row?: T) => string)
  /** 批量删除前是否提示确认 */
  batchDelConfirm: boolean | ((data?: T[]) => string)
  /** 获取数据后是否清除选择 */
  clearSelection: boolean
  /** 新增成功提示 */
  saveSuccessMsg: string
  /** 编辑成功提示 */
  updateSuccessMsg: string
  /** 删除成功提示 */
  delSuccessMsg: string
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
  defaults: AvueCrudDefaults<T>
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
  beforeSubmit: T
  afterSubmit: any
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
  beforeGetInfo: T
  afterGetInfo: any
}>

export interface UseCrudStateOptions<T, P> extends Partial<Omit<CrudState<T, P>, 'crudOption' | 'pageOption'>> {
  crudOption?: Partial<CrudOption<T, P>>
  pageOption?: PageOption
}

export interface UseCrudMethodsOptions<T, P> {
  getDataList?: () => any
  getInfoData?: (id?: any) => any
  handleSave?: AvueCrudEmits<T>['row-save']
  handleUpdate?: AvueCrudEmits<T>['row-update']
  handleDel?: AvueCrudEmits<T>['row-del']
  batchDel?: () => any
  filterRow?: (row: T) => T
  filterParams?: (params: P) => P
  searchChange?: (form: P, done: () => void) => any
  searchReset?: () => any
  selectionChange?: AvueCrudEmits<T>['selection-change']
  pageSizeChange?: AvueCrudEmits<T>['size-change']
  pageCurrentChange?: AvueCrudEmits<T>['current-change']
  sortChange?: AvueCrudEmits<T>['sort-change']
  beforeOpen?: AvueCrudProps<T>['beforeOpen']
  beforeClose?: AvueCrudProps<T>['beforeClose']
}

export type UseCrudOptions<T, P> = UseCrudStateOptions<T, P> & UseCrudMethodsOptions<T, P>
