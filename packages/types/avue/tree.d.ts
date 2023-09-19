import type { VNode } from 'vue'
import type { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { NodeDropType, TreeComponentProps, TreeOptionProps as _TreeOptionProps } from 'element-plus/es/components/tree/src/tree.type'
import type { ElSize } from '../helpers'

declare module '@smallwei/avue' {
  export type TreeFormType = 'add' | 'edit' | 'parentAdd'
  export type TreeNode<T> = Node & { data: T }

  export interface AvueTreeOption<T = any> extends
    Partial<Pick<TreeComponentProps,
      | 'checkStrictly'
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
    dialogWidth?: string
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
  }

  export interface TreeOptionProps extends _TreeOptionProps {
    /** 指定节点选择框的值也作为节点的nodeKey */
    value?: string
    leaf?: _TreeOptionProps['isLeaf']
  }

  export interface AvueTreeProps<T = any> extends
    Partial<Pick<TreeComponentProps,
      | 'expandOnClickNode'
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
    permission?: object
    /** 弹窗打开前 */
    beforeOpen?: (done: () => void, type: TreeFormType) => void
    /** 弹窗关闭前 */
    beforeClose?: (done: () => void, type: TreeFormType) => void
    'onUpdate:modelValue'?: (form: T) => void
    onChange?: (form: T) => void
    /** 新增节点回调 */
    onSave?: (node: TreeNode<T>, data: T, done: () => void, loading: () => void) => void
    /** 修改节点回调 */
    onUpdate?: (node: TreeNode<T>, data: T, done: () => void, loading: () => void) => void
    /** 删除节点回调 */
    onDel?: (node: TreeNode<T>, done: () => void) => void
    /** 当复选框被点击的时候触发 */
    onCheckChange?: (data: T, checked: boolean, indeterminate: boolean) => void
    /** 当节点被点击的时候触发 */
    onNodeClick?: (data: T, node: TreeNode<T>, nodeComponent: ComponentInternalInstance) => void
    /** 节点开始拖拽时触发的事件 */
    onNodeDragStart?: (node: TreeNode<T>, event: Event) => void
    /** 拖拽进入其他节点时触发的事件 */
    onNodeDragEnter?: (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, event: Event) => void
    /** 拖拽离开某个节点时触发的事件 */
    onNodeDragLeave?: (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, event: Event) => void
    /** 在拖拽节点时触发的事件 */
    onNodeDragOver?: (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, event: Event) => void
    /** 拖拽结束时（可能未成功）触发的事件 */
    onNodeDragEnd?: (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, dropType: NodeDropType, event: Event) => void
    /** 拖拽成功完成时触发的事件 */
    onNodeDrop?: (draggingNode: TreeNode<T>, dropNode: TreeNode<T>, dropType: NodeDropType, event: Event) => void
  }

  export interface AvueTreeMethods<T = any> extends
    Pick<InstanceType<typeof ElTree>,
      | 'filter'
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
      | 'insertAfter'
    > { }

  export interface AvueTreeSlots<T = any> {
    menu: (arg: { node: TreeNode<T> }) => VNode[]
    default: (arg: { node: TreeNode<T>; data: T }) => VNode[]
  }

  export const AvueTree: new<T = any>(props: AvueTreeProps<T>) =>
  { $props: AvueTreeProps; $slots: AvueTreeSlots<T> } & AvueTreeMethods<T>

  export type AvueTreeInstance<T = any> = InstanceType<typeof AvueTree<T>>
}
