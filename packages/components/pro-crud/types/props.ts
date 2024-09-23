import type { ProCrudOption } from './option'
import type { AvueCrudSlots } from '@smallwei/avue'

export interface ProCrudProps<T> {
  option?: ProCrudOption<T>
  data?: T[]
}

export type CrudMenuSlots<T> = Pick<AvueCrudSlots<T>, 'menu' | 'menu-btn'>

export type CrudListSlots<T> = AvueCrudSlots<T> & {
  'item-icon'?: AvueCrudSlots<T>['expand']
  'item-title'?: AvueCrudSlots<T>['expand']
  'item-subtitle'?: AvueCrudSlots<T>['expand']
  'item-content'?: AvueCrudSlots<T>['expand']
}

export type CrudCardSlots<T> = CrudListSlots<T>

export type ProCrudSlots<T> = CrudListSlots<T>
