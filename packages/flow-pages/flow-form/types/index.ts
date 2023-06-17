import type { ExtractPropTypes, SetupContext } from 'vue'
import type { useEmits, useProps, useProvideState } from '../composables'
import type { FlowButtonKey } from '../../api'

export type FlowFormState = ReturnType<typeof useProvideState>

export type Props = ExtractPropTypes<ReturnType<typeof useProps>>
export type Emits = ReturnType<typeof useEmits>
export type Emit = SetupContext<ReturnType<typeof useEmits>>['emit']

export interface Permission {
  /** 标签的显隐 */
  tabs?: Record<string, boolean>
  /** 按钮的显隐 */
  button?: Record<FlowButtonKey, boolean>
}

export type ButtonHandler = Record<string, () => Promise<void> | void>
