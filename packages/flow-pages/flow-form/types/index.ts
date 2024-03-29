import type { ExtractPropTypes, SetupContext } from 'vue'
import type { FlowButtonKey, flowFormEmits, flowFormProps, useProvideState } from '@yusui/flow-pages'

export type FlowFormState = ReturnType<typeof useProvideState>

export type FlowFormProps = ExtractPropTypes<typeof flowFormProps>
export type FlowFormEmits = typeof flowFormEmits
export type FlowFormEmit = SetupContext<FlowFormEmits>['emit']

export interface FlowFormPermission {
  /** 标签的显隐 */
  tabs?: Record<string, boolean>
  /** 按钮的显隐 */
  button?: Record<FlowButtonKey, boolean>
}

export type ButtonHandler = Record<string, () => Promise<any> | any>
