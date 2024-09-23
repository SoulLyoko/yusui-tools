import type { IconifyInfo as _IconifyInfo, IconifyJSONPackageExports as _IconifyJSONPackageExports, IconifyCategories, IconifyJSONIconsData } from '@iconify/types'

export interface IconifyInfo extends _IconifyInfo {
  prefix?: string
}

export interface IconifyJSONPackageExports extends _IconifyJSONPackageExports {
  info: IconifyInfo
}

export interface IconsData extends Partial<IconifyJSONIconsData> {
  categories?: IconifyCategories
  uncategorized?: string[]
}

export interface CollectionsData {
  [index: string]: IconifyInfo
}

export interface IconSelectProps {
  modelValue?: string
  source?: 'iconify' | 'icones'
  collections?: string | IconifyJSONPackageExports[]
  width?: number
  height?: number
}
