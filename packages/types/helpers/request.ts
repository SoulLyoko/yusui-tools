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

export type Res<T = any> = { code: number, msg: string } & T

export type ResData<T = any> = Res<{ data: T }>

export type ResRows<T = any> = Res<{ rows: T, total: number }>

export type ResRecords<T = any> = ResData<{ records: T, current: number, pages: number, size: number, total: number }>
