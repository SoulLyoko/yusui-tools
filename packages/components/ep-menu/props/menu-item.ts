import type { ExtractPropTypes, PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { menuProps, subMenuProps } from 'element-plus'
import { omit } from 'lodash-unified'

export const menuItemProps = {
  ...omit(subMenuProps, 'index'),
  /** 是否折叠 */
  collapse: menuProps.collapse,
  /** 菜单列表 */
  routes: { type: Array as PropType<RouteRecordRaw[]>, default: () => [] },
  /** 菜单索引 */
  indexKey: { type: String as PropType<'name' | 'path'>, default: 'path' },
}

export const menuItemEmits = {
  click: (route: RouteRecordRaw) => true,
  contextmenu: (route: RouteRecordRaw) => true,
}

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export type MenuItemEmits = typeof menuItemEmits
export interface MenuItemSlots {
  default(props: { route: RouteRecordRaw }): any
}
