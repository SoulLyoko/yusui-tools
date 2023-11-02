import type { ElDialog, ElDrawer, ElOverlay } from 'element-plus'
import type { AppContext, VNode } from 'vue'

export type Slot = string | VNode | (() => VNode)
export type UseOverlayType = 'dialog' | 'drawer' | 'overlay'
export interface UseOverlayComponentProps {
  dialog: InstanceType<typeof ElDialog>['$props']
  drawer: InstanceType<typeof ElDrawer>['$props']
  overlay: InstanceType<typeof ElOverlay>['$props']
}

export type UseOverlayOptions<T extends UseOverlayType = 'dialog'> = {
  /**
   * 弹窗方式 'dialog' | 'drawer' | 'overlay'
   * @default 'dialog'
   */
  type?: T
  /** 头部插槽 */
  header?: Slot
  /** 中间内容插槽 */
  default?: Slot
  /** 底部插槽 */
  footer?: Slot
  /** 应用上下文 */
  appContext?: AppContext
  onClose?: () => any
} & UseOverlayComponentProps[T]
