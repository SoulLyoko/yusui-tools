export interface Page extends Sort {
  current?: number
  size?: number
  /** @deprecated */
  pageNum?: number
  /** @deprecated */
  pageSize?: number
}

export interface Sort {
  ascs?: string
  descs?: string
  /** @deprecated */
  order?: string
  /** @deprecated */
  prop?: string
}
