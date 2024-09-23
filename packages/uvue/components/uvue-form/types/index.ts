import type { formEmits, formProps } from '../constants'
import type { AvueFormColumn, AvueFormGroup, AvueFormOption, PropKeyType } from '@smallwei/avue'
import type { ExtractPropTypes, SetupContext } from 'vue'

export type UvueFormProps = ExtractPropTypes<typeof formProps>
export type UvueFormEmitFn = SetupContext<typeof formEmits>['emit']

export interface UvueFormOption<T = any> extends AvueFormOption<T> {
  rowKey?: string
  errorType?: 'none' | 'toast' | 'border-bottom'
  borderBottom?: boolean
  labelAlign?: 'left' | 'center' | 'right'
  labelStyle?: string | object
  column?: UvueFormColumn<T>[]
  group?: UvueFormGroup<T>[]
  delBtn?: boolean
  delText?: string
}
export interface UvueFormColumn<T = any> extends AvueFormColumn<T> {
  borderBottom?: boolean
  rightIcon?: string
  leftIcon?: string
  leftIconStyle?: string | object
  required?: boolean
  children?: {
    addBtn?: boolean
    delBtn?: boolean
    limit?: number
    rowAdd?: (done: (row: any) => void) => void
    rowDel?: (row: any, done: () => void) => void
  } & UvueFormOption
}
export interface UvueFormGroup<T = any> extends AvueFormGroup<T> {
  column?: UvueFormColumn<T>[]
}
export type UvueFormDefaults<T = any, K extends string = PropKeyType<T> > = Record<K, UvueFormColumn<T>>
