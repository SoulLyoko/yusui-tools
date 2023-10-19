import type { EpMenuItemProps } from './menu-item'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuEmits, MenuProps } from 'element-plus'

export type EpMenuProps = {
  /** 当前激活的菜单项 */
  modelValue?: string
}
& EpMenuItemProps
& Partial<MenuProps>

export type OnSelectParams = Parameters<MenuEmits['select']>
export type EpMenuEmits = {
  'item-click': [route: RouteRecordRaw]
  'item-contextmenu': [route: RouteRecordRaw]
  select: OnSelectParams
} & {}
