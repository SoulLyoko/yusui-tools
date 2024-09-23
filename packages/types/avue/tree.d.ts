import type { ElSize, ElTreeNode, EmitFn } from '@yusui/types'
import type { ElTree } from 'element-plus'
import type { TreeOptionProps as _TreeOptionProps, NodeDropType, TreeComponentProps } from 'element-plus/es/components/tree/src/tree.type'
import type { VNode } from 'vue'

declare module '@smallwei/avue' {
  export type TreeFormType = 'add' | 'edit' | 'parentAdd'
  export type TreeNode<T> = ElTreeNode & { data: T }

  export interface AvueTreeOption<T = any> extends
    Partial<Pick<TreeComponentProps, | 'checkStrictly'
    | 'expandOnClickNode'
    | 'defaultExpandAll'
    | 'checkOnClickNode'
    | 'defaultExpandedKeys'
    | 'draggable'
    | 'allowDrag'
    | 'allowDrop'
    | 'lazy'
    | 'highlightCurrent'
    | 'filterNodeMethod'
    | 'accordion'>> {
    /** 组件大小 */
    size?: ElSize
    /** 是否虚拟树 */
    virtualize?: boolean
    /** 弹出框宽度 */
    dialogWidth?: number
    /** 自定义form表单，具体参考avue-form */
    formOption?: AvueFormOption<T>
    /** 菜单栏 */
    menu?: boolean
    /** 新增按钮 */
    addBtn?: boolean
    /** 编辑按钮 */
    editBtn?: boolean
    /** 修改按钮 */
    delBtn?: boolean
    /** 配置选项 */
    props?: TreeOptionProps
    /** 是否显示搜索框 */
    filter?: boolean
    /** 输入框占位文本 */
    filterText?: string
    /** 懒加载函数 */
    treeLoad?: TreeComponentProps['load']
    /** 表单弹窗标题 */
    title?: string
  }

  export interface TreeOptionProps extends _TreeOptionProps {
    /** 指定节点选择框的值也作为节点的nodeKey */
    value?: string
    leaf?: _TreeOptionProps['isLeaf']
  }

  export interface AvueTreeProps<T = any> {
  }
  export interface AvueTreeProps<T = any> extends
    Partial<Pick<TreeComponentProps, | 'expandOnClickNode'
    | 'checkOnClickNode'
    | 'filterNodeMethod'
    | 'indent'>> {
    /** 表单数据 */
    modelValue?: T
    /** 存放结构体的数据 */
    data?: T[]
    /** 组件配置属性 */
    option?: AvueTreeOption<T>
    /** 加载状态 */
    loading?: boolean
    /** 按钮权限 */
    permission?: AvueTreeOption<T> | ((key: string, data: T) => boolean)
    /** 弹窗打开前 */
    beforeOpen?: (done: Fn, type: TreeFormType) => void
    /** 弹窗关闭前 */
    beforeClose?: (done: Fn, type: TreeFormType) => void
  }

  export interface AvueTreeEmits<T = any> {
    /** 更新表单值 */
    'update:modelValue': (form: T) => any
    /** 表单更新事件 */
    'change': (form: T) => any
    /** 新增节点回调 */
    'save': (node: TreeNode<T>, data: T, done: (form?: T) => void, loading: Fn) => any
    /** 修改节点回调 */
    'update': (node: TreeNode<T>, data: T, done: (form?: T) => void, loading: Fn) => any
    /** 删除节点回调 */
    'del': (node: TreeNode<T>, done: Fn) => any
    /** 当复选框被点击的时候触发 */
    'check-change': (data: T, checked: boolean, indeterminate: boolean) => any
    /** 当节点被点击的时候触发 */
    'node-click': (data: T, node: TreeNode<T>, nodeComponent: ComponentInternalInstance) => any
    /** 节点开始拖拽时触发的事件 */
    'node-drag-start': (node: TreeNode<T>, event: Event) => any
    /** 拖拽进入其他节点时触发的事件 */
    'node-drag-enter': (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, event: Event) => any
    /** 拖拽离开某个节点时触发的事件 */
    'node-drag-leave': (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, event: Event) => any
    /** 在拖拽节点时触发的事件 */
    'node-drag-over': (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, event: Event) => any
    /** 拖拽结束时（可能未成功）触发的事件 */
    'node-drag-end': (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, dropType: NodeDropType, event: Event) => any
    /** 拖拽成功完成时触发的事件 */
    'node-drop': (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, dropType: NodeDropType, event: Event) => any
    /** 节点右击事件 */
    'node-contextmenu': (event: Event, data: T, node: TreeNode<T>, nodeComponent: ComponentInternalInstance) => any
  }

  export interface AvueTreeData<T> {
    filterValue: string
    client: { x: number, y: number, show: boolean }
    box: boolean
    type: string
    node: TreeNode<T>
    obj: T
    form: T
  }

  export interface AvueTreeComputed<T = any> {
    virtualize: AvueTreeOption['virtualize']
    componentName: 'elTreeV2' | 'elTree'
    styleName: { top: string, left: string }
    treeProps: TreeOptionProps
    menu: boolean
    title: AvueTreeOption['title']
    treeLoad: AvueTreeOption['treeLoad']
    checkStrictly: AvueTreeOption['checkStrictly']
    accordion: AvueTreeOption['accordion']
    multiple: AvueTreeOption['multiple']
    lazy: AvueTreeOption['lazy']
    treeLoad: AvueTreeOption['treeLoad']
    addText: string
    addFlag: boolean
    size: AvueTreeOption['size']
    props: TreeOptionProps
    leafKey: TreeOptionProps['leaf']
    valueKey: AvueTreeOption['value']
    labelKey: AvueTreeOption['label']
    childrenKey: AvueTreeOption['children']
    nodeKey: AvueTreeOption['nodeKey']
    defaultExpandAll: AvueTreeOption['defaultExpandAll']
    defaultExpandedKeys: AvueTreeOption['defaultExpandedKeys']
    formOption: AvueFormOption<T>
  }

  export interface AvueTreeMethods<T = any> extends
    Pick<InstanceType<typeof ElTree>, | 'filter'
    | 'getNodeKey'
    | 'getNodePath'
    | 'getCheckedNodes'
    | 'getCheckedKeys'
    | 'getCurrentNode'
    | 'getCurrentKey'
    | 'setCheckedNodes'
    | 'setCheckedKeys'
    | 'setChecked'
    | 'getHalfCheckedNodes'
    | 'getHalfCheckedKeys'
    | 'setCurrentNode'
    | 'setCurrentKey'
    | 'getNode'
    | 'remove'
    | 'append'
    | 'insertBefore'
    | 'insertAfter'> {
    /** 节点开始拖拽时触发的事件 */
    handleDragStart: AvueTreeEmits<T>['node-drag-start']
    /** 拖拽进入其他节点时触发的事件 */
    handleDragEnter: AvueTreeEmits<T>['node-drag-enter']
    /** 拖拽离开某个节点时触发的事件 */
    handleDragLeave: AvueTreeEmits<T>['node-drag-leave']
    /** 在拖拽节点时触发的事件 */
    handleDragOver: AvueTreeEmits<T>['node-drag-over']
    /** 拖拽结束时（可能未成功）触发的事件 */
    handleDragEnd: AvueTreeEmits<T>['node-drag-end']
    /** 拖拽成功完成时触发的事件 */
    handleDrop: AvueTreeEmits<T>['node-drop']
    /** 获取按钮文字 */
    menuIcon: (value: string) => string
    /** 获取按钮权限 */
    getPermission: (key: string) => boolean
    /** 初始化函数 */
    initFun: Fn
    /** 节点右击事件 */
    nodeContextmenu: AvueTreeEmits<T>['node-contextmenu']
    /** 当复选框被点击的时候触发 */
    handleCheckChange: AvueTreeEmits<T>['check-change']
    /** 表单提交事件 */
    handleSubmit: (form: T, done: Fn) => void
    /** 当节点被点击的时候触发 */
    nodeClick: AvueTreeEmits<T>['node-click']
    /** 对树节点进行筛选时执行的方法 */
    filterNode: AvueTreeProps<T>['filterNodeMethod']
    /** 关闭表单弹窗 */
    hide: (done: Fn) => void
    /** 保存表单 */
    save: (data: T, done: Fn) => void
    /** 更新表单 */
    update: (data: T, done: Fn) => void
    /** 打开表单编辑弹窗 */
    rowEdit: () => void
    /** 打开表单新增顶级弹窗 */
    parentAdd: () => void
    /** 打开表单新增弹窗 */
    rowAdd: () => void
    /** 打开表单弹窗 */
    show: () => void
    /** 删除节点 */
    rowRemove: () => void
    findData: (id: string) => T
  }

  export interface AvueTreeSlots<T = any> {
    'menu': (props: { node: TreeNode<T> }) => VNode[]
    'default': (props: { node: TreeNode<T>, data: T }) => VNode[]
    'add-btn': () => VNode[]
  }

  export const AvueTree: new<T = any>(props: AvueTreeProps<T>) =>
    {
      $props: AvueTreeProps<T>
      $emit: EmitFn<AvueTreeEmits<T>>
      $slots: AvueTreeSlots<T>
      $data: AvueTreeData<T>
    } & AvueTreeProps<T> & AvueTreeComputed<T> & AvueTreeMethods<T>

  export type AvueTreeInstance<T = any> = InstanceType<typeof AvueTree<T>>
}
