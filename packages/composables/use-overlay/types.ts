import type { ElDialog, ElDrawer } from 'element-plus'
import type { AppContext, VNode } from 'vue'

export type UseOverlayType = 'dialog' | 'drawer'
export type UseOverlaySlot = string | VNode | (() => VNode)
export interface UseOverlayComponentProps {
  dialog: InstanceType<typeof ElDialog>['$props']
  drawer: InstanceType<typeof ElDrawer>['$props']
}

export type UseOverlayOptions<T extends UseOverlayType = 'dialog'> = {
  /**
   * 弹窗方式 'dialog' | 'drawer'
   * @default 'dialog'
   */
  type?: T
  /** 头部插槽 */
  header?: UseOverlaySlot
  /** 中间内容插槽 */
  content?: UseOverlaySlot
  /** 底部插槽 */
  footer?: UseOverlaySlot
  /** 应用上下文 */
  appContext?: AppContext
} & UseOverlayComponentProps[T]
