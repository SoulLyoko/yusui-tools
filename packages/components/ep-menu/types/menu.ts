import type { RouteRecordRaw } from 'vue-router'
import type { MenuEmits, MenuProps } from 'element-plus'
import type { EpMenuItemProps, EpMenuItemSlots } from './menu-item'

export type EpMenuProps = {
  /** 当前激活的菜单项 */
  modelValue?: string
}
& EpMenuItemProps
& Partial<MenuProps>

export type OnSelectParams = Parameters<MenuEmits['select']>
export type OnOpenParams = Parameters<MenuEmits['open']>
export type onCloseParams = Parameters<MenuEmits['close']>
export type EpMenuEmits = {
  'item-click': [route: RouteRecordRaw]
  'item-contextmenu': [route: RouteRecordRaw]
  select: OnSelectParams
  open: OnOpenParams
  close: onCloseParams
} & {}

export type EpMenuSlots = EpMenuItemSlots
