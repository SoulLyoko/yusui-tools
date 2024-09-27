import type { UseDictOptions } from '@yusui/composables'

export interface UvueFilterOption {
  activeColor?: string
  inactiveColor?: string
  closeOnClickMask?: boolean
  closeOnClickSelf?: boolean
  duration?: string | number
  height?: string | number
  borderBottom?: boolean
  titleSize?: string | number
  borderRadius?: string | number
  menuIcon?: string
  menuIconSize?: string | number
  items?: UvueFilterItem[]
}

export interface UvueFilterItem extends UseDictOptions {
  title?: string
  prop?: string
  disabled?: boolean
  height?: string | number
  multiple?: boolean
  cascader?: boolean
}
