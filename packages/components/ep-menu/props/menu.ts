import type { ExtractPropTypes } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuItemSlots } from './menu-item'

import { menuEmits as elMenuEmits, menuProps as elMenuProps } from 'element-plus'

import { menuItemProps } from './menu-item'

export const menuProps = {
  ...elMenuProps,
  ...menuItemProps,
  modelValue: { type: String },
}

export const menuEmits = {
  ...elMenuEmits,
  'item-click': (route: RouteRecordRaw) => true,
  'item-contextmenu': (route: RouteRecordRaw) => true,
}

export type MenuProps = ExtractPropTypes<typeof menuItemProps>
export type MenuEmits = typeof menuEmits
export type MenuSlots = MenuItemSlots
