import type { ExtractPropTypes, SetupContext } from 'vue'
import type { useEmits, useProps, useProvideState } from '../composables'
import type { FlowButtonKey } from '../../api/flow-button'

export type FlowFormState = ReturnType<typeof useProvideState>

export type Props = ExtractPropTypes<ReturnType<typeof useProps>>
export type Emits = ReturnType<typeof useEmits>
export type Emit = SetupContext<ReturnType<typeof useEmits>>['emit']

export interface Permission {
  /** 附件标签页的显隐 */
  fileTab?: boolean
  /** 流程跟踪页的显隐 */
  trackTab?: boolean
  /** 按钮的显隐 */
  button?: Record<FlowButtonKey, boolean>
}

export type ButtonHandler = {
  [K in FlowButtonKey]?: () => Promise<void> | void;
}
