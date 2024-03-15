import type { ExtractPropTypes, PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuItemSlots } from './menu-item'

import { menuEmits as elMenuEmits, menuProps as elMenuProps } from 'element-plus'
import { omit } from 'lodash-unified'

import { menuItemProps } from './menu-item'

export const menuProps = {
  ...elMenuProps,
  ...omit(menuItemProps, 'route'),
  routes: { type: Array as PropType<RouteRecordRaw[]>, default: () => [] },
  modelValue: { type: String },
}

export const menuEmits = {
  ...elMenuEmits,
  click: (_route: RouteRecordRaw) => true,
}

export type MenuProps = ExtractPropTypes<typeof menuProps>
export type MenuEmits = typeof menuEmits
export type MenuSlots = MenuItemSlots
