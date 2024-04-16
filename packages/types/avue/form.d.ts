import type { Component, VNode } from 'vue'
import type { FormItemRule, TabsPaneContext, TabsProps, UploadFile, UploadRawFile, UploadUserFile } from 'element-plus'
import type { ElSize, EmitFn } from '@yusui/types'

declare module '@smallwei/avue' {
  export type FormType = 'add' | 'edit' | 'view'
  export type MenuPosition = 'left' | 'right' | 'center'
  export type LabelPosition = 'left' | 'right' | 'top'
  export type AsteriskPosition = 'left' | 'right'
  export type FormRowData<T> = T & Partial<Record<`$${keyof T}`, string>> & Record<string, any>
  export type PropKeyType<T> = keyof T extends string ? keyof T : string
  export type AvueFormDefaults<T = any, K = PropKeyType<T>> = Record<K, AvueFormColumn<T>>
  // export type AvueFormDefaults = Record<string, AvueFormColumn>;

  export interface AvueFormColumn<T = any, K = PropKeyType<T>, D = FormRowData<T>> {
    /** 标题名称 */
    label?: string
    /** 列字段(唯一不重复) */
    prop?: K
    /** 字段控制器 */
    control?: (val: any, form: D) => Record<string, AvueFormColumn<T>>
    /** 深结构数据绑定值 */
    bind?: string
    /** 验证规则可以参考 [async-validator](https://github.com/yiminghe/async-validator) */
    rules?: FormItemRule[]
    /** 初始化默认值 */
    value?: any
    /** 禁用 */
    disabled?: boolean
    /** 字段位置排序，数字越大位置越靠前 */
    order?: number
    /** 组件的尺寸 */
    size?: ElSize
    /** 栅格占据的列数 */
    span?: number
    /** 栅格间隔 */
    gutter?: number
    /** 栅格左侧的间隔格数 */
    offset?: number
    /** 栅格向右移动格数 */
    push?: number
    /** 栅格向左移动格数 */
    pull?: number
    /** 栅格单独成行 */
    row?: boolean
    /** 是否可见 */
    display?: boolean
    /** 标题名称宽度 */
    labelWidth?: number | string
    /** 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 labelWidth */
    labelPosition?: LabelPosition
    /** 文字提示 */
    tip?: string
    /** 文字提示展示方向 */
    tipPlacement?: string
    /** 标题文字提示 */
    labelTip?: string
    /** 标题文字提示展示方向 */
    labelTipPlacement?: string

    /** 表单项类型 */
    type?: string
    /** 分组折叠 */
    arrow?: boolean
    /** 分组默认叠起 */
    collapse?: boolean
    /** 是否可以清空选项 */
    clearable?: boolean
    /** 辅助语 */
    placeholder?: string
    /** 只读 */
    readonly?: boolean

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
    /** 字典级联字段 */
    cascader?: string[]
    /** 级联的默认选项序号 */
    cascaderIndex?: number

    /** 子表单 */
    children?: {
      /** 展示类型 */
      type?: 'form' | 'crud'
      /** 新增方法 */
      rowAdd?: (done: (row: any) => void) => void
      /** 删除方法 */
      rowDel?: (row: any, done: Fn) => void
      /** 限制当前最大行数 */
      limit?: number
    } & AvueCrudOption
    /** 数据类型用于数组和字符串之间的转化 */
    dataType?: string
    /** 分隔符 */
    separator?: string
    /** 等同于<component :is=""> */
    component?: string | Component
    /** 传递给组件的参数 */
    params?: object
    /** 传递给组件的事件 */
    events?: object
    /** 值改变事件 */
    change?: (args: { column: AvueFormColumn<T>, row: D, value: any, dic: DicItem[], item: DicItem }) => void
    /** 值改变事件 */
    onChange?: AvueFormColumn['change']
    /** 点击事件 */
    click?: (args: { column: AvueFormColumn<T>, row: D, value: any, dic: DicItem[], item: DicItem, event: Event }) => void
    /** 点击事件 */
    onClick?: AvueFormColumn['click']
    /** 聚焦事件 */
    focus?: (args: { column: AvueFormColumn<T>, row: D, value: any, dic: DicItem[], item: DicItem, event: Event }) => void
    /** 聚焦事件 */
    onFocus?: AvueFormColumn['focus']
    /** 失焦事件 */
    blur?: (args: { column: AvueFormColumn<T>, row: D, value: any, dic: DicItem[], item: DicItem, event: Event }) => void
    /** 失焦事件 */
    onBlur?: AvueFormColumn['blur']
    /** 其它属性根据type查看对应的文档 */
    [x: string]: any
  }

  export interface AvueFormGroup<T = any> {
    /** 左侧图标 */
    icon?: string
    /** 标题 */
    label?: string
    /** 是否折叠 */
    collapse?: boolean
    /** 是否显示右侧箭头 */
    arrow?: boolean
    /** 分组字段唯一标识 */
    prop?: string
    /** 是否显示分组 */
    display?: boolean
    /** 是否禁用 */
    disabled?: boolean
    /** 表单项配置 */
    column?: Array<AvueFormColumn<T>>
    [x: string]: any
  }

  export interface AvueFormOption<T = any> {
    /** 组件大小 */
    size?: ElSize
    /** 表单项配置 */
    column?: Array<AvueFormColumn<T>>
    /** 标题宽度 */
    labelWidth?: number | string
    /** 标题位置，如果值为 left 或者 right 时，则需要设置 labelWidth */
    labelPosition?: LabelPosition
    /** 标题的后缀 */
    labelSuffix?: string
    /** 回车按键触发提交表单 */
    enter?: boolean
    /** 表单分组配置 */
    group?: Array<AvueFormGroup<T>>
    /** 选项卡模式 */
    tabs?: boolean
    /** 选项卡风格类型 */
    tabsType?: TabsProps['type']
    /** 默认展开或激活的分组 */
    tabsActive?: string
    /** 表单操作栏 */
    menuBtn?: boolean
    /** 表单操作菜单栅格占据的列数 */
    menuSpan?: number
    /** 表单操作菜单按钮的排列方式 */
    menuPosition?: MenuPosition
    /** 重值不清空的字段 */
    clearExclude?: string[]
    /** 提交按钮 */
    submitBtn?: boolean
    /** 提交按钮文案 */
    submitText?: string
    /** 清空按钮 */
    emptyBtn?: boolean
    /** 清空按钮文案 */
    emptyText?: string
    /** 模拟数据按钮 */
    mockBtn?: boolean
    /** 模拟数据按钮文案 */
    mockText?: string
    /** 查看模式 */
    detail?: boolean
    /** 栅格 */
    span?: number
    /** 间隔 */
    gutter?: number
    /** 表单只读 */
    readonly?: boolean
    /** 表单禁用 */
    disabled?: boolean
    /** 校验图标 */
    statusIcon?: boolean
    /** 隐藏星号 */
    hideRequiredAsterisk?: boolean
    /** 星号的位置 */
    requireAsteriskPosition?: AsteriskPosition
    /** 滚动到错误项 */
    scrollToError?: boolean
    /** 滚动到错误项配置 */
    scrollIntoViewOptions?: ScrollIntoViewOptions
    /** 表单宽度 */
    formWidth?: number | string
    [x: string]: any
  }

  export interface AvueFormProps<T = any, D = FormRowData<T>> {
    /** 配置项结构 */
    defaults?: AvueFormDefaults<T>
    /** 表单总配置属性 */
    option?: AvueFormOption<T>

    /** 表单禁用状态 */
    status?: boolean
    /** 表单绑定值 v-model */
    modelValue?: D
    /** upload组件上传前的回调,done用于继续图片上传，loading用于中断操作 */
    uploadBefore?: (
      file: UploadRawFile,
      done: (file?: File) => void,
      loading: Fn,
      column: AvueFormColumn<T>
    ) => void
    /** upload组件上传后的回调,done用于结束操作，loading用于中断操作 */
    uploadAfter?: (res: any, done: Fn, loading: Fn, column: AvueFormColumn<T>) => void
    /** upload组件删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除 */
    uploadDelete?: (file: UploadFile, column: AvueFormColumn<T>) => boolean | Promise<any> | void
    /** upload组件查看回调 */
    uploadPreview?: (file: UploadFile, column: AvueFormColumn<T>, done: Fn) => void
    /** upload组件上传失败错误回调 */
    uploadError?: (error: Error, column: AvueFormColumn<T>) => void
    /** upload组件上传超过长度限制回调 */
    uploadExceed?: (limit: number, files: File[], fileList: UploadUserFile[], column: AvueFormColumn<T>) => void
  }

  export interface AvueFormEmits<T = any, D = FormRowData<T>> {
    /** 更新表单值 */
    'update:modelValue': (row: D) => any
    /** 更新表单状态 */
    'update:status': (disabled: boolean) => any
    /** 表单重置事件 */
    'reset-change': Fn
    /** 模拟数据事件 */
    'mock-data': Fn
    /** 分组点击事件 */
    'tab-click': ((paneOrTabs: TabsPaneContext | string[], ev?: Event) => any)
    /** 表单提交事件 */
    'submit': (form: T, done: Fn) => any
    /** 表单校验错误事件 */
    'error': (msg: string) => any
    /** 更新配置项结构 */
    'update:defaults': (defaluts: AvueFormDefaults<T>) => any

  }

  // export interface AvueFormEmits<T = any, D = FormRowData<T>> {
  // /** 更新表单值 */
  // 'update:modelValue'?: (row: D) => any
  // /** 更新表单状态 */
  // 'update:status'?: (disabled: boolean) => any
  // /** 表单重置回调事件 */
  // 'reset-change'?: Fn
  // /** 模拟数据事件 */
  // 'mock-change'?: Fn
  // /** 分组点击事件 */
  // 'tab-click'?: ((activeTabs: string[]) => any) | ((pane: TabsPaneContext, ev: Event) => any)
  // /** 表单提交回调事件 */
  // 'submit'?: (form: T, done: Fn) => any
  // /** 表单校验错误事件 */
  // 'error'?: (msg: string) => any
  // /** 更新配置项结构 */
  // 'update:defaults'?: (defaluts: AvueFormDefaults<T>) => any
  // }

  export interface AvueFormData<T = any, D = TableRowData<T>> {
    DIC: Record<string, DicItem[]>
    cascaderDIC: Record<string, DicItem[]>
    objectOption: AvueFormDefaults<T>

    config: any
    activeName: string
    allDisabled: boolean
    tableOption: AvueFormOption<T>
    form: D
    formCreate: boolean
    formList: string[]
    formBind: Record<number, (...args: any[]) => any>
  }

  export interface AvueFormComputed<T = any, D = TableRowData<T>> {
    isMobile: boolean
    resultOption: AvueFormOption<T>
    rowKey: string
    formRules: Record<string, FormItemRule[]>

    size: ElSize
    columnSlot: string[]
    labelSuffix: string
    isMenu: boolean
    isDetail: boolean
    isAdd: boolean
    isTabs: boolean
    isEdit: boolean
    isView: boolean
    detail: AvueFormOption<T>['detail']
    disabled: AvueFormOption<T>['disabled']
    readonly: AvueFormOption<T>['readonly']
    tabsType: AvueFormOption<T>['tabsType']
    columnLen: number
    dynamicOption: AvueFormColumn<T>[]
    propOption: AvueFormColumn<T>[]
    columnOption: AvueFormGroup<T>[]
    menuPosition: MenuPosition
    boxType: FormType
    isPrint: boolean
    tabsActive: string
    isMock: boolean
    menuSpan: number
  }

  export interface AvueFormMethods<T = any, D = FormRowData<T>> {
    /** 动态获取组件 */
    getComponent: <P extends string, C extends AvueFormColumn<T>['component']>(type?: P, component?: C) => P extends undefined ? C : P
    /** 获取占位文字 */
    getPlaceholder: (column: AvueFormColumn<T>, type?: string) => string
    /** 获取详情状态 */
    getDisabled: (column: AvueFormColumn<T>) => boolean
    isGroupShow: (item: any, index: number) => boolean
    /** 处理表单数据 */
    dataFormat: Fn
    /** 设置表单控制 */
    setControl: Fn
    /** 设置表单数据 */
    setForm: Fn
    /** 更新表单数据 */
    setVal: Fn
    /** 设置表单项标题 */
    setLabel: Fn
    /** 分组点击事件 */
    handleGroupClick: AvueFormEmits<T>['tab-click']
    /** 分组点击事件 */
    handleTabClick: AvueFormEmits<T>['tab-click']
    /** 获取表单项属性 */
    getItemParams: (column: AvueFormColumn<T>, item: AvueFormGroup<T>, type: string, isPx?: boolean) => number | string
    /** 对部分表单字段进行校验的方法 */
    validateField: (props?: string | string[]) => Promise<boolean>
    /** 滚动到指定的字段 */
    scrollToField: (prop: string) => void
    /** 是否显示检验提示 */
    validTip: (column: AvueFormColumn<T>) => boolean
    /** 获取prop的ref对象 */
    getPropRef: (prop: string) => any
    /** 字段值变化 */
    handleChange: (list: AvueFormColumn<T>[], column: AvueFormColumn<T>) => void
    /** 打印表单 */
    handlePrint: Fn
    /** 字段值变化 */
    propChange: (option: AvueFormColumn<T>[], column: AvueFormColumn<T>) => void
    /** 模拟数据 */
    handleMock: Fn
    /** 是否详情 */
    vaildDetail: (column: AvueFormColumn<T>) => boolean
    /** 是否禁用 */
    vaildDisabled: (column: AvueFormColumn<T>) => boolean
    /** 是否显示 */
    vaildDisplay: (column: AvueFormColumn<T>) => boolean
    /** 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 */
    clearValidate: (props?: string | string[]) => void
    /** 校验子表单 */
    validateCellForm: () => Promise<string>
    /** 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise */
    validate: (callback?: (valid: boolean, done: Fn, msg: string) => void) => Promise<boolean>
    /** 对整个表单进行重置 */
    resetForm: (reset?: boolean) => void
    /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
    resetFields: Fn
    /** 表单禁用状态 */
    show: Fn
    /** 表单启用状态 */
    hide: Fn
    /** 对整个表单进行提交 */
    submit: Fn

    /** 重新初始化（多数用于服务端加载或者更新网络字典） */
    init: Fn
    /** 重新初始化字典 */
    dicInit: Fn
    /** 更新字典 */
    updateDic: (prop?: string, list?: DicItem[]) => void
    /** 设置字典列表 */
    handleSetDic: (list: DicItem[], res: Record<string, DicItem[]>) => void
    /** 加载本地字典 */
    handleLocalDic: Fn
    /** 加载网络字典 */
    handleLoadDic: Fn
    /** 加载级联字典 */
    handleLoadCascaderDic: Fn
  }

  export interface AvueFormSlots<T = any, D = FormRowData<T>> {
    'menu-form': (props: { disabled: boolean, size: ElSize }) => VNode[]
    [x: `${string}-header`]: (props: { column: AvueFormColumn<T> }) => VNode[]
    [x: `${string}-label`]: (props: {
      column: AvueFormColumn<T>
      value: any
      disabled: boolean
      size: ElSize
      dic: DicItem[]
    }) => VNode[]
    [x: `${string}-error`]: (props: {
      error: string
      column: AvueFormColumn<T>
      value: any
      disabled: boolean
      size: ElSize
      dic: DicItem[]
    }) => VNode[]
    [x: string]: (props: {
      row: D
      value: any
      column: AvueFormColumn<T>
      size: ElSize
      disabled: boolean
      dic: DicItem[]
    }) => VNode[]
  }

  export const AvueForm: new<T = any>(props: AvueFormProps<T>) =>
    {
      $props: AvueFormProps<T>
      $emit: EmitFn<AvueFormEmits<T>>
      $slots: AvueFormSlots<T>
      $data: AvueFormData<T>
    } & AvueFormProps<T> & AvueFormData<T> & AvueFormComputed<T> & AvueFormMethods<T>

  export type AvueFormInstance<T = any> = InstanceType<typeof AvueForm<T>>
}
