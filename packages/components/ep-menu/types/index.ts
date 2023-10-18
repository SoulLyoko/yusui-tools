import type { RouteRecordRaw } from 'vue-router'
import type { MenuEmits, MenuProps, SubMenuProps } from 'element-plus'

export type EpMenuProps = {
  /** 当前菜单项 */
  modelValue?: string
  /** 菜单列表 */
  routes?: RouteRecordRaw[]
  /** 菜单索引 */
  indexKey?: 'name' | 'path'
}
& Partial<MenuProps>
& Partial<SubMenuProps>

export type OnSelectParams = Parameters<MenuEmits['select']>
export type EpMenuEmits = {
  click: [menu: RouteRecordRaw]
  constextmenu: [menu: RouteRecordRaw]
  select: OnSelectParams
} & {}

// #region route-meta
declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单标题 */
    title?: string
    /** 菜单图标 */
    icon?: string
    /** 禁用菜单 */
    disabled?: boolean
  }
}
// #endregion route-meta
