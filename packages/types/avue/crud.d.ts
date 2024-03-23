import type { FormItemRule, TableColumnCtx, TableProps, UploadFile, UploadRawFile, UploadUserFile } from 'element-plus'
import type { VNode } from 'vue'
import type { ElSize, EmitFn } from '@yusui/types'

declare module '@smallwei/avue' {
  export type Align = 'left' | 'center' | 'right'
  export type MenuType = 'button' | 'icon' | 'text' | 'menu'
  export type Fixed = boolean | 'left' | 'right'
  export type TableRowData<T> = { $cellEdit?: boolean, $index?: number } & FormRowData<T>
  export type CellEvent<T> = (row: TableRowData<T>, column: TableColumnCtx<T>, cell: any, event: Event) => void
  export type RowEvent<T> = (row: TableRowData<T>, column: TableColumnCtx<T>, event: Event) => void
  export type HeaderEvent<T> = (column: TableColumnCtx<T>, event: Event) => void
  export type AvueCrudDefaults<T = any, K = PropKeyType<T>> = Record<K, AvueCrudColumn<T>>
  // export type AvueCrudDefaults = Record<string, AvueCrudColumn>;

  export interface PageOption {
    /** 总条数,如果为0的话不显示分页 */
    total?: number
    /** 当前页数 */
    currentPage?: number
    /** 是否为分页按钮添加背景色 */
    background?: boolean
    /** 每页显示条目个数，支持.sync修饰符 */
    pageSize?: number
    /** 分页的数组分段 */
    pageSizes?: number[]
    /** 页码按钮的数量，当总页数超过该值时会折叠 */
    pagerCount?: number
    /** 分页布局 */
    layout?: string
  }

  export interface SumColumn {
    /** 前缀 */
    label?: string
    /** 需要计算的prop */
    name?: string
    /** 计算类型 sum:合计,avg:平均,count:统计 */
    type?: 'sum' | 'avg' | 'count'
  }

  export interface AvueCrudColumn<T = any, D = TableRowData<T>> extends AvueFormColumn<T> {
    /** 对应列的宽度 */
    width?: number | string
    /** 对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列 */
    minWidth?: number | string
    /** 列是否固定在左侧或者右侧，true 表示固定在左侧 */
    fixed?: Fixed
    /** 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 */
    sortable?: boolean | 'custom'
    /** 用来格式化内容 */
    formatter?: (row: D, value: any, label: string, column: AvueCrudColumn<T>[]) => any
    /** 当内容过长被隐藏时显示 tooltip */
    overHidden?: boolean
    /** 表格内容对齐方式 */
    align?: Align
    /** 表头对齐方式 */
    headerAlign?: Align
    /** 传入true开启默认数据过滤的选项，也可以传入自定义数组格式，数组中的元素需要有text和value属性 */
    filters?: boolean | [{ text: string, value: string | number }]
    /** 是否搜索 */
    search?: boolean
    /** 搜索表单的默认值 */
    searchValue?: any
    /** 搜索框辅助文字 */
    searchPlaceholder?: string
    /** 搜索框栅列 */
    searchSpan?: number
    /** 搜索字段位置排序(序号越大越靠前) */
    searchOrder?: number
    /** 搜索框的间距 */
    searchGutter?: number
    /** 范围搜索 */
    searchRange?: boolean
    /** 搜索框类型 */
    searchType?: string
    /** 搜索框的标题宽度 */
    searchLabelWidth?: number | string
    /** 搜索框的清除按钮 */
    searchClearable?: boolean
    /** 搜索表单的是否多选 */
    searchMultiple?: boolean
    /** 多选时是否将选中值按文字的形式展示 */
    searchTags?: boolean
    /** 搜索项标题位置 */
    searchLabelPosition?: LabelPosition
    /** 弹窗编辑文字提示 */
    searchTip?: string
    /** 搜索框辅助文字提示展示方向 */
    searchTipPlacement?: string
    /** 搜索框大小 */
    searchSize?: string
    /** 是否可以输入搜索。 */
    searchFilterable?: boolean
    /** 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回true就会显示。 */
    searchFilterMethod?: (value: any, row: D, column: AvueCrudColumn<T>[]) => boolean
    /** 表单新增时是否禁止 */
    addDisabled?: boolean
    /** 表单编辑时是否禁止 */
    editDisabled?: boolean
    /** 表单查看时是否禁止 */
    viewDisabled?: boolean
    /** 表单新增时是否可见 */
    addDisplay?: boolean
    /** 表单编辑时是否可见 */
    editDisplay?: boolean
    /** viewDisplay */
    viewDisplay?: boolean
    /** 表单新增时是否为查看模式 */
    addDetail?: boolean
    /** 表单编辑时是否为查看模式 */
    editDetail?: boolean
    /** 开启html转义 */
    html?: boolean
    /** 开启行编辑模式 */
    cell?: boolean
    /** 是否在动态搜索条件里面显示 */
    filter?: boolean
    /** 数据过滤的选项是否多选 */
    filterMultiple?: boolean
    /** 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回true就会显示 */
    filterMethod?: (value: any, row: D, column: AvueCrudColumn<T>[]) => boolean
    /** 是否加入动态现隐列 */
    showColumn?: boolean
    /** 隐藏列 */
    hide?: boolean
    /** 表格打开表单的时候是否重新拉取字典 */
    dicFlag?: boolean
    [x: string]: any
  }

  export interface AvueCrudGroup<T = any> extends AvueFormGroup<T> {
    /** 表单新增时是否禁止 */
    addDisabled?: boolean
    /** 表单编辑时是否禁止 */
    editDisabled?: boolean
    /** 表单查看时是否禁止 */
    viewDisabled?: boolean
    /** 表单新增时是否可见 */
    addDisplay?: boolean
    /** 表单编辑时是否可见 */
    editDisplay?: boolean
    /** 表单查看时是否可见 */
    viewDisplay?: boolean
    column?: AvueCrudColumn<T>[]
  }

  export interface AvueCrudOption<T = any, D = TableRowData<T>> extends AvueFormOption<T> {
    /** 表格的高度，默认为自动高度。如果设置为auto，会自适应窗口高度，配合calcHeight参数去调节范围 */
    height?: number | string
    /** 表格的最大高度 */
    maxHeight?: number | string
    /** 表格的高度，默认为自动高度。如果设置为auto，会自适应窗口高度，配合calcHeight参数去调节范围 */
    calcHeight?: number | string
    /** 是否为斑马纹 */
    stripe?: boolean
    /** 是否显示表格序号 */
    index?: boolean
    /** 序号列宽度 */
    indexWidth?: number
    /** 序号列是否冻结 */
    indexFixed?: Fixed
    /** 序号列标题名称 */
    indexLabel?: string
    /** 是否显示操作栏 */
    menu?: boolean
    /** 操作菜单栏的宽度 */
    menuWidth?: number
    /** 操作栏标题 */
    menuTitle?: string
    /** 操作列是否冻结 */
    menuFixed?: Fixed
    /** 操作菜单的按钮样式 */
    menuType?: MenuType
    /** 操作栏表头的对齐方式 */
    menuHeaderAlign?: Align
    /** 操作栏按钮的对齐方式 */
    menuAlign?: Align
    /** 菜单按钮的文字信息 */
    menuBtnTitle?: string
    /** 表格右侧行操作按钮的排列方式 */
    menuPosition?: MenuPosition
    /** 表格勾选列 */
    selection?: boolean
    /** 表格勾选列的宽度 */
    selectionWidth?: number
    /** 表格勾选列 */
    selectionFixed?: Fixed
    /** 清空选中按钮（当selection为true起作用） */
    selectClearBtn?: boolean
    /** 仅对 selection为true 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 rowKey） */
    reserveSelection?: boolean
    /** selection为true 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 */
    selectable?: (row: D) => boolean
    /** 展开折叠行 */
    expand?: boolean
    /** 展开折叠行宽度 */
    expandWidth?: number
    /** 展开列是否行冻结 */
    expandFixed?: Fixed
    /** 表格边框 */
    border?: boolean
    /** 是列的宽度是否自撑开属性 */
    fit?: boolean
    /** 是否显示表格的表头 */
    showHeader?: boolean
    /** 是否要高亮当前行 */
    highlightCurrentRow?: boolean
    /** 行数据的Key的主键，用于其他相关操作 */
    rowKey?: string
    /** 行数据的 Key，的父类Key用于局部刷新树形表格。 */
    rowParentKey?: string
    /** 空数据时显示的文本内容，也可以通过slot="empty"设置 */
    emptyText?: string
    /** 是否默认展开所有行，"expand"为true的时候有效 */
    defaultExpandAll?: boolean
    /** 可以通过该属性设置目前的展开行，需要设置rowKey属性才能使用，该属性为展开行的keys数组。 */
    expandRowKeys?: (string | number)[]
    /** 表格的排序字段{prop:'date',order:'descending'}prop默认排序字段，order排序方式 */
    defaultSort?: { prop: string, order: 'ascending' | 'descending' }
    /** 是否在表尾显示合计行 */
    showSummary?: boolean
    /** 是否懒加载子节点数据,会调用tree-load方法回调 */
    lazy?: boolean
    /** 表格标题 */
    title?: string
    /** 表格标题标签/组件 */
    titleSize?: string | Component
    /** 表格标题样式 */
    titleStyle?: string | object
    /** 新增按钮 */
    addBtn?: boolean
    /** 新增按钮文案 */
    addBtnText?: string
    /** 新增按钮图标 */
    addBtnIcon?: string
    /** 编辑按钮 */
    editBtn?: boolean
    /** 编辑按钮文案 */
    editBtnText?: string
    /** 编辑按钮图标 */
    editBtnIcon?: string
    /** 删除按钮 */
    delBtn?: boolean
    /** 删除按钮文案 */
    delBtnText?: string
    /** 删除按钮图标 */
    delBtnIcon?: string
    /** 查看按钮 */
    viewBtn?: boolean
    /** 查看按钮文案 */
    viewBtnText?: string
    /** 查看按钮图标 */
    viewBtnIcon?: string
    /** 修改按钮 */
    updateBtn?: boolean
    /** 修改按钮文案 */
    updateBtnText?: string
    /** 修改按钮图标 */
    updateBtnIcon?: string
    /** 保存按钮 */
    saveBtn?: boolean
    /** 保存按钮文案 */
    saveBtnText?: string
    /** 保存按钮图标 */
    saveBtnIcon?: string
    /** 取消按钮 */
    cancelBtn?: boolean
    /** 取消按钮文案 */
    cancelBtnText?: string
    /** 取消按钮图标 */
    cancelBtnIcon?: string
    /** 搜索显隐按钮 */
    searchBtn?: boolean
    /** 搜索按钮文案 */
    searchBtnText?: string
    /** 搜索按钮图标 */
    searchBtnIcon?: string
    /** 清空按钮 */
    emptyBtn?: boolean
    /** 清空按钮文案 */
    emptyBtnText?: string
    /** 清空按钮图标 */
    emptyBtnIcon?: string
    /** 打印按钮 */
    printBtn?: boolean
    /** 导出按钮 */
    excelBtn?: boolean
    /** 自定义过滤按钮 */
    filterBtn?: boolean
    /** 刷新数据按钮 */
    refreshBtn?: boolean
    /** 列操作按钮 */
    columnBtn?: boolean
    /** 搜索显隐按钮 */
    searchShowBtn?: boolean
    /** 行数据复制按钮 */
    copyBtn?: boolean
    /** 新增窗口标题 */
    addTitle?: string
    /** 编辑窗口标题 */
    editTitle?: string
    /** 查看窗口标题 */
    viewTitle?: string
    /** 表格弹窗是否插入到body */
    dialogAppendToBody?: boolean
    /** 表格弹窗是否可以拖拽 */
    dialogDrag?: boolean
    /** 表格弹窗是否为全屏 */
    dialogFullscreen?: boolean
    /** 表格弹窗自定义class */
    dialogCustomClass?: string
    /** 表格弹窗是否可以通过按下ESC关闭 */
    dialogEscape?: boolean
    /** 表格弹窗是否可以通过点击modal关闭 */
    dialogClickModal?: boolean
    /** 表格弹窗是否显示关闭按钮 */
    dialogCloseBtn?: boolean
    /** 表格弹窗是否需要遮罩层 */
    dialogModal?: boolean
    /** 表格弹窗框按钮的位置 */
    dialogMenuPosition?: MenuPosition
    /** 表格弹窗顶部的距离 */
    dialogTop?: string | number
    /** 表格弹窗方式 */
    dialogType?: 'dialog' | 'drawer'
    /** 表格抽屉打开方向 */
    dialogDirection?: 'rtl' | 'ltr' | 'ttb' | 'btt'
    /** 表格弹窗宽度 */
    dialogWidth?: string | number
    /** 表格弹窗高度 */
    dialogHeight?: string | number
    /** 首次加载是否显示搜索 */
    searchShow?: boolean
    /** 是否展示半收缩按钮 */
    searchIcon?: boolean
    /** 展示半收缩按钮的触发条件个数 */
    searchIndex?: number
    /** 搜索操作按钮的位置 */
    searchMenuPosition?: MenuPosition
    /** 搜索框辅助文字 */
    searchPlaceholder?: string
    /** 搜索项栅格占据的列数 */
    searchSpan?: number
    /** 搜索框的间距 */
    searchGutter?: number
    /** 搜索框的标题宽度 */
    searchLabelWidth?: number | string
    /** 搜索项标题位置 */
    searchLabelPosition?: LabelPosition
    /** 搜索框整体布局大小 */
    searchSize?: ElSize
    /** 搜索操作按钮栅格占据的列数 */
    searchMenuSpan?: number
    /** 首次加载是否显示搜索 */
    searchEnter?: boolean
    /** 表格行编辑时添加按钮 */
    addRowBtn?: boolean
    /** 表格列齐方式 */
    align?: Align
    /** 表格行编辑操作按钮 */
    cellBtn?: boolean
    /** 表格以卡片分层模式显示，搜索部分和主体部分分层展示 */
    card?: boolean
    /** 日期组件按钮 */
    dateBtn?: boolean
    /** 表格头部中间菜单显隐 */
    header?: boolean
    /** 表头对齐方式 */
    headerAlign?: Align
    /** 只负责样式控制表格如果选择一半，不会出现半选 */
    indeterminate?: boolean
    /** 表格合计需要配置的字段 */
    sumColumnList?: SumColumn[]
    /** 弹出框更新按钮标题 */
    updateBtnTitle?: string
    /** 拖拽排序 */
    sortable?: boolean
    /** 行拖拽排序 */
    rowSort?: boolean
    /** 列拖拽排序 */
    columnSort?: boolean
    /** 渲染嵌套数据的配置选项 */
    treeProps?: TableProps<T>['treeProps']
    /** 展开层级 */
    expandLevel?: number
    /** 表格列配置属性 */
    column?: AvueCrudColumn<T>[]
    /** 分组表单,放入正常的column配置就行 */
    group?: AvueCrudGroup<T>[]
  }

  export interface AvueCrudProps<T = any, D = TableRowData<T>> {
    /** 配置项结构 v-model */
    defaults?: AvueCrudDefaults<T>
    /** 表格配置属性 */
    option?: AvueCrudOption<T>

    /** 表单绑定值 v-model */
    modelValue?: D
    /** 表格数据 */
    data?: T[]
    /** 表格多个按钮权限控制，采用函数方式可以精确到行控制 */
    permission?: AvueCrudOption<T> | ((key: string, row: D, index: number) => boolean)
    /** 表格搜索的表单的变量 v-model */
    search?: any
    /** 表格的分页数据 v-model */
    page?: PageOption
    /** 打开前的回调，会暂停Dialog的打开，done用于关闭Dialog，type为当前窗口的类型 */
    beforeOpen?: (done: () => void, type: FormType) => void
    /** 关闭前的回调，会暂停Dialog的打开，done用于关闭Dialog，type为当前窗口的类型 */
    beforeClose?: (done: () => void, type: FormType) => void
    /** 单元格的className的回调方法，也可以使用字符串为所有单元格设置一个固定的className */
    cellClassName?: TableProps<T>['cellClassName']
    /** 表头单元格的className的回调方法，也可以使用字符串为所有表头单元格设置一个固定的className */
    headerCellClassName?: TableProps<T>['headerCellClassName']
    /** 行的className的回调方法，也可以使用字符串为所有行设置一个固定的className */
    rowClassName?: TableProps<T>['rowClassName']
    /** 合并行或列的计算方法 */
    spanMethod?: TableProps<T>['spanMethod']
    /** 自定义的合计计算方法 */
    summaryMethod?: TableProps<T>['summaryMethod']
    /** 表格等待框的控制 */
    tableLoading?: boolean
    /** 图片上传前的回调，会暂停图片上传，done用于继续图片上传，loading用于中断操作 */
    uploadBefore?: (
      file: UploadRawFile,
      done: (File?: File) => void,
      loading: () => void,
      column: AvueCrudColumn<T>
    ) => void
    /** 图片上传后的回调，done用于结束操作，loading用于中断操作 */
    uploadAfter?: (res: any, done: () => void, loading: () => void, column: AvueCrudColumn<T>) => void
    /** 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除 */
    uploadDelete?: (file: UploadFile, column: AvueCrudColumn<T>) => boolean | Promise<any> | void
    /** 查看前的回调 */
    uploadPreview?: (file: UploadFile, column: AvueCrudColumn<T>, done: () => void) => void
    /** 上传失败错误回调 */
    uploadError?: (error: Error, column: AvueCrudColumn<T>) => void
    /** 上传超过长度限制回调 */
    uploadExceed?: (limit: number, files: File[], fileList: UploadUserFile[], column: AvueCrudColumn<T>) => void
  }

  export interface AvueCrudEmits<T = any, D = TableRowData<T>> {
    /** 更新表单值 */
    'update:modelValue': (row: D) => any
    /** 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 */
    'tree-load': (row: D, treeNode: any, resolve: (data: T[]) => void) => any
    /** 清空选择项时会触发该事件 */
    'selection-clear': (selection: D[]) => any
    /** 当拖动表头改变了列的宽度的时候会触发该事件 */
    'header-dragend': (newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: Event) => any
    /** 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
    'expand-change': (row: D, expanded: D[] | boolean) => any
    /** 当前行被选择是时会触发该事件 */
    'current-row-change': (row: D) => any
    /** 点击刷新按钮触发该事件 */
    'refresh-change': () => any
    /** 当选择项发生变化时会触发该事件 */
    'selection-change': (selection: D[]) => any
    /** 当用户手动勾选数据行的Checkbox时触发的事件 */
    'select': (selection: D[], row: D) => any
    /** 当选择所有项时会触发该事件 */
    'select-all': (selection: D[]) => any
    /** TODO:拖动表格项时会触发该事件 */
    'sortable-change': (...args: any[]) => any
    /** 当表格的筛选条件发生变化的时候会触发该事件 */
    'filter': (filters: [[text: string, symbol: string, value: string]]) => any
    /** 当表格的筛选条件发生变化的时候会触发该事件 */
    'filter-change': (filters: TableColumnCtx<T>['filters']) => any
    /** 当表格的排序条件发生变化的时候会触发该事件 */
    'sort-change': (args: { column: TableColumnCtx<T>, prop: string, order: 'ascsending' | 'descending' }) => any
    /** 当某一行被双击时会触发该事件 */
    'row-dblclick': RowEvent<T>
    /** 当某一行被点击时会触发该事件 */
    'row-click': RowEvent<T>
    /** 当单元格hover进入时会触发该事件 */
    'cell-mouse-enter': CellEvent<T>
    /** 当单元格hover退出时会触发该事件 */
    'cell-mouse-leave': CellEvent<T>
    /** 当某个单元格被点击时会触发该事件 */
    'cell-click': CellEvent<T>
    /** 当某一列的表头被点击时会触发该事件 */
    'header-click': HeaderEvent<T>
    /** 分组点击事件 */
    'tab-click': ((paneOrTabs: TabsPaneContext | string[], ev?: Event) => any)
    /** 表单校验错误事件 */
    'error': (msg: string) => any
    /** dateBtn为true时的选择日期回调方法 */
    'date-change': (data: { value: string[] }) => any
    /** 更新搜索表单 */
    'update:search': (form: any) => any
    /** 更新分页数据 */
    'update:page': (page: PageOption) => any
    /** 点击搜索后触发该事件 */
    'search-change': (form: any, done: () => void) => any
    /** 清空搜索回调方法 */
    'search-reset': () => any
    /** 分页加载事件 */
    'on-load': (page: PageOption) => any
    /** 分页页码改变时会触发 */
    'current-change': (current: number) => any
    /** 分页条数改变时会触发 */
    'size-change': (size: number) => any
    /** 当某一行被鼠标右键点击时会触发该事件 */
    'row-contextmenu': RowEvent<T>
    /** 当某一列的表头被鼠标右键点击时触发该事件 */
    'header-contextmenu': HeaderEvent<T>
    /** 当某个单元格被双击时会触发该事件 */
    'cell-dblclick': CellEvent<T>
    /** 行数据删除时触发该事件 */
    'row-del': (row: D, index: number) => any
    /** 新增数据后点击确定触发该事件 */
    'row-save': (row: D, done: () => void, loading: () => void) => any
    /** 编辑数据后确定触发该事件 */
    'row-update': (row: D, index: number, done: () => void, loading: () => void) => any
    /** 表单数据更新事件 */
    'change': (row: D) => any
    /** 更新配置项结构 */
    'update:defaults': (defaluts: AvueCrudDefaults<T>) => any
  }

  export interface AvueCrudData<T = any, D = TableRowData<T>> {
    DIC: Record<string, DicItem[]>
    cascaderDIC: Record<string, DicItem[]>
    tableOption: AvueCrudOption<T>
    objectOption: AvueCrudDefaults<T>

    reload: number
    cellForm: { list: D[] }
    config: any
    list: D[]
    listError: Record<string, { valid: boolean, msg: string }>
    tableForm: T
    tableHeight?: number
    tableIndex: number
    tableSelect: D[]
    sumsList: Record<string, string>
    cascaderIndexList: number[]
    cascaderDicList: Record<string, DicItem[]>
    cascaderDic: Record<string, DicItem[]>
    cascaderFormList: Record<number, D>
    btnDisabledList: Record<number, boolean>
    btnDisabled: boolean
    default: object
  }

  export interface AvueCrudComputed<T = any> {
    isMobile: boolean
    resultOption: AvueTableOption<T>
    rowKey: string
    formRules: Record<string, FormItemRule[]>

    size: ElSize
    isSortable: AvueCrudOption['sortable']
    isRowSort: AvueCrudOption['rowSort']
    isColumnSort: AvueCrudOption['columnSort']
    rowParentKey: AvueCrudOption['rowParentKey']
    childrenKey: string
    hasChildrenKey: string
    treeProps: AvueCrudOption['treeProps']
    isAutoHeight: boolean
    formSlot: string[]
    searchSlot: string[]
    mainSlot: string[]
    calcHeight: number
    propOption: AvueCrudColumn<T>[]
    isShowSummary: AvueCrudOption['showSummary']
    isHeader: boolean
    isTree: boolean
    isCard: 'always' | 'never'
    expandLevel: AvueCrudOption['expandLevel']
    expandAll: number
    parentOption: AvueCrudOption<T>
    columnOption: AvueCrudColumn<T>[]
    sumColumnList: AvueCrudOption['sumColumnList']
    selectLen: number
  }

  export interface AvueCrudMethods<T = any, D = TableRowData<T>> {
    /** 表单校验 */
    handleValidate: (prop: string, valid?: boolean, msg?: string) => void
    /** 获取按钮权限 */
    getPermission: (key: string, row?: D, index?: number) => boolean
    /** 获取表格计算高度 */
    getTableHeight: () => void
    /** 对Crud进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 */
    doLayout: () => void
    /** 进行重新初始化渲染 */
    refreshTable: (callback?: () => void) => void
    /** 树懒加载事件 */
    treeLoad: AvueCrudEmits<T>['tree-load']
    /** 获取按钮文字 */
    menuIcon: (action?: string) => string
    /** 获取按钮图标 */
    getBtnIcon: (action?: string) => string
    /** 对部分表单字段进行校验的方法 */
    validateField: (props: string[]) => void
    /** 用于多选表格，清空用户的选择 */
    clearSelection: () => void
    /** 用于多选表格，切换所有行的选中状态 */
    toggleAllSelection: () => void
    /** 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则可直接设置这一行选中与否 */
    toggleRowSelection: (row?: D, selected?: boolean) => void
    /** 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） */
    toggleRowExpansion: (row?: D, expanded?: boolean) => void
    /** 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态 */
    setCurrentRow: (row?: D) => void
    /** 初始化表格数据 */
    dataInit: () => void
    /** 拖动表头事件 */
    headerDragend: AvueCrudEmits<T>['header-dragend']
    /** 表头排序 */
    headerSort: (oldIndex: number, newIndex: number) => void
    /** 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 */
    clearFilter: (columnKeys?: string[]) => void
    /** 展开或收起事件 */
    expandChange: AvueCrudEmits<T>['expand-change']
    /** 行单选事件 */
    currentRowChange: AvueCrudEmits<T>['current-row-change']
    /** 刷新事件 */
    refreshChange: () => void
    /** 用于多选表格，切换某些行的选中状态 */
    toggleSelection: (rows?: D[]) => void
    /** 行多选事件 */
    selectionChange: AvueCrudEmits<T>['selection-change']
    /** 行选择事件 */
    select: AvueCrudEmits<T>['select']
    /** 全选事件 */
    selectAll: AvueCrudEmits<T>['select-all']
    /** 筛选事件 */
    filterChange: AvueCrudEmits<T>['filter-change']
    /** 排序事件 */
    sortChange: AvueCrudEmits<T>['sort-change']
    /** 行双击击事件 */
    rowDblclick: AvueCrudEmits<T>['row-dblclick']
    /** 行单击事件 */
    rowClick: AvueCrudEmits<T>['row-click']
    /** 用于清空排序条件，数据会恢复成未排序的状态 */
    clearSort: () => void
    /** 单元格hover进入事件 */
    cellMouseEnter: AvueCrudEmits<T>['cell-mouse-enter']
    /** 单元格hover退出事件 */
    cellMouseLeave: AvueCrudEmits<T>['cell-mouse-leave']
    /** 单元格点击事件 */
    cellClick: AvueCrudEmits<T>['cell-click']
    /** 表头点击事件 */
    headerClick: AvueCrudEmits<T>['header-click']
    /** 行右击事件 */
    rowContextmenu: AvueCrudEmits<T>['row-contextmenu']
    /** 表头右击事件 */
    headerContextmenu: AvueCrudEmits<T>['header-contextmenu']
    /** 单元格双击事件 */
    cellDblclick: AvueCrudEmits<T>['cell-dblclick']
    /** 行新增 */
    rowCellAdd: (row: D) => void
    /** 行取消 */
    rowCancel: (row: D, index: number) => void
    /** 行编辑 */
    rowCell: (row: D, index?: number) => void
    /** 单元格编辑 */
    rowCellEdit: (row: D, index?: number) => void
    /** 对子表单进行校验 */
    validateCellForm: () => Promise<string>
    /** 对子表单字段进行校验 */
    validateCellForm: (prop: string) => Promise<void>
    /** 打开表单新增窗口 */
    rowAdd: () => void
    /** 表单保存调用 */
    rowSave: (row: D) => void
    /** 表单更新调用 */
    rowUpdate: (row: D) => void
    /** 关闭弹窗 */
    closeDialog: () => void
    /** 获取prop的ref对象 */
    getPropRef: (props: string) => void
    /** 更新表单数据事件 */
    setVal: () => void
    /** 打开表单编辑窗口 */
    rowEdit: (row: D, index?: number) => void
    /** 打开表单新增窗口，并复制当前行数据 */
    rowCopy: (row: D) => void
    /** 打开表单查看窗口 */
    rowView: (row: D, index?: number) => void
    /** 行删除 */
    rowDel: (row: D, index?: number) => void
    /** 表格合并方法 */
    tableSpanMethod: TableProps<T>['spanMethod']
    /** 表格合计方法 */
    tableSummaryMethod: TableProps<T>['summaryMethod']
    /** TODO: */
    tableDrop: (...args: T[]) => void
    /** TODO: */
    findData: (id: string) => any

    /** 重新初始化 */
    init: () => void
    /** 重新初始化字典 */
    dicInit: () => void
    /** 更新字典 */
    updateDic: (prop?: string, list?: DicItem[]) => void
    /** 设置字典列表 */
    handleSetDic: (list: DicItem[], res: Record<string, DicItem[]>) => void
    /** 加载本地字典 */
    handleLocalDic: () => void
    /** 加载网络字典 */
    handleLoadDic: () => void
    /** 加载级联字典 */
    handleLoadCascaderDic: () => void

    /** 导出表格 */
    rowExcel: () => void
    /** 打印表格 */
    rowPrint: () => void

    /** 清空搜索栏目的值 */
    searchReset: () => void
    /** 清空搜索栏目的值 */
    searchChange: AvueCrudEmits<T>['search-change']

    /** 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 */
    clearValidate: (props?: string | string[]) => void
    /** 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise */
    validate: (callback?: (valid: boolean, done: () => void, msg: string) => void) => Promise<boolean>
    /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
    resetForm: () => void
  }

  export interface AvueCrudSlots<T = any, D = TableRowData<T>> {
    /** 空数据插槽 */
    'empty': () => VNode[]
    /** 展开插槽 */
    'expand': (props: { row: D, index: number }) => VNode[]
    /** 菜单插槽 */
    'menu': (props: { row: D, type: MenuType, disabled: boolean, size: ElSize, index: number }) => VNode[]
    /** 表单菜单插槽 */
    'menu-form': (props: { disabled: boolean, size: ElSize, type: FormType }) => VNode[]
    /** 表格头部插槽 */
    'header': () => VNode[]
    /** 表格底部部插槽 */
    'footer': () => VNode[]
    /** 分页插槽 */
    'page': () => VNode[]
    /** 下拉菜单插槽 */
    'menu-btn': (props: { row: D, type: string, disabled: boolean, size: ElSize, index: number }) => VNode[]
    /** 左侧菜单插槽 */
    'menu-left': (props: { size: ElSize }) => VNode[]
    /** 右侧菜单插槽 */
    'menu-right': (props: { size: ElSize }) => VNode[]
    /** 搜索栏插槽 */
    'search': (props: { row: D, search: D, size: ElSize }) => VNode[]
    /** 搜索栏菜单插槽 */
    'search-menu': (props: { row: D, search: D, disabled: boolean, size: ElSize }) => VNode[]
    /** 表单项标题插槽 */
    [x: `${string}-label`]: (props: {
      value: any
      column: AvueCrudColumn<T>
      size: ElSize
      disabled: boolean
      dic: DicItem[]
      type: FormType
    }) => VNode[]
    /** 表单项或子表单项插槽 */
    [x: `${string}-form` ]: (props: {
      // form
      value: any
      column: AvueCrudColumn<T>
      size: ElSize
      disabled: boolean
      dic: DicItem[]
      type: FormType
      // dynamic
      row: any
      index: number
      label: string
    }) => VNode[]
    /** 表单项校验错误插槽 */
    [x: `${string}-error`]: (props: {
      error: string
      column: AvueFormColumn<T>
      value: any
      disabled: boolean
      size: ElSize
      dic: DicItem[]
      type: FormType
    }) => VNode[]
    /** 搜索项或搜索项标题插槽 */
    [x: `${string}-search` | `${string}-search-label`]: (props: {
      value: any
      column: AvueCrudColumn<T>
      size: ElSize
      disabled: boolean
      dic: DicItem[]
    }) => VNode[]
    /** 列表头插槽 */
    [x: `${string}-header`]: (props: { column: AvueCrudColumn<T> }) => VNode[]
    /** 列插槽 */
    [x: string]: (props: {
      row: D
      index: number
      dic: DicItem[]
      size: ElSize
      label: string
    }) => VNode[]
    // [x: string]: (props: {
    //   value?: any;
    //   row?: T;
    //   type?: FormType | string;
    //   index?: number;
    //   dic?: DicItem[];
    //   disabled?: boolean;
    //   readonly?: boolean;
    //   size?: ElSize;
    //   label?: string;
    //   search?: T;
    //   column?: AvueCrudColumn<T>;
    // }) => VNode[];
  }

  export const AvueCrud: new<T = any>(props: AvueCrudProps<T>) =>
    {
      $props: AvueCrudProps<T>
      $emit: EmitFn<AvueCrudEmits<T>>
      $slots: AvueCrudSlots<T>
      $data: AvueCrudInstanceData<T>
    } & AvueCrudProps<T> & AvueCrudData<T> & AvueCrudComputed<T> & AvueCrudMethods<T>

  export type AvueCrudInstance<T = any> = InstanceType<typeof AvueCrud<T>>
}
