import type { formEmits, formProps } from '../constants'
import type { AvueFormColumn, AvueFormGroup, AvueFormOption, PropKeyType } from '@smallwei/avue'
import type { CollapseItemProps } from 'uview-plus/types/comps/collapseItem'
import type { FormProps } from 'uview-plus/types/comps/form'
import type { FormItemProps } from 'uview-plus/types/comps/formItem'
import type { ExtractPropTypes, SetupContext } from 'vue'

export type UvueFormProps = ExtractPropTypes<typeof formProps>
export type UvueFormEmitFn = SetupContext<typeof formEmits>['emit']

export interface UvueFormOption<T = any> extends Omit<AvueFormOption<T>, 'labelPosition'>, FormProps {
  rowKey?: string
  column?: UvueFormColumn<T>[]
  group?: UvueFormGroup<T>[]
  delBtn?: boolean
  delText?: string
}
export interface UvueFormColumn<T = any> extends Omit<AvueFormColumn<T>, 'labelPosition'>, FormItemProps {
  children?: {
    addBtn?: boolean
    delBtn?: boolean
    limit?: number
    rowAdd?: (done: (row: any) => void) => void
    rowDel?: (row: any, done: () => void) => void
  } & UvueFormOption
}
export interface UvueFormGroup<T = any> extends Omit<AvueFormGroup<T>, 'column'>, CollapseItemProps {
  column?: UvueFormColumn<T>[]
}
export type UvueFormDefaults<T = any, K extends string = PropKeyType<T> > = Record<K, UvueFormColumn>
