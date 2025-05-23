import type { ExtractPropTypes, PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { menuProps, subMenuProps } from 'element-plus'
import { omit } from 'lodash-es'

export const menuItemProps = {
  ...omit(subMenuProps, 'index'),
  /** 是否折叠 */
  collapse: menuProps.collapse,
  /** 菜单项 */
  route: { type: Object as PropType<RouteRecordRaw>, default: () => ({}) },
  /** 菜单索引 */
  indexKey: { type: String as PropType<'name' | 'path'>, default: 'path' },
}

export const menuItemEmits = {
  click: (_route: RouteRecordRaw) => true,
}

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export type MenuItemEmits = typeof menuItemEmits
export interface MenuItemSlots {
  default: (props: { route: RouteRecordRaw }) => any
}
