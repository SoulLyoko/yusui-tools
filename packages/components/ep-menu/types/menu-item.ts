import type { RouteRecordRaw } from 'vue-router'
import type { SubMenuProps } from 'element-plus'

export type EpMenuItemProps = {
  /** 菜单列表 */
  routes?: RouteRecordRaw[]
  /** 菜单索引 */
  indexKey?: 'name' | 'path'
  /** 是否折叠 */
  collapse?: boolean
} & Partial<SubMenuProps>

export type EpMenuItemEmits = {
  click: [route: RouteRecordRaw]
  contextmenu: [route: RouteRecordRaw]
} & {}
