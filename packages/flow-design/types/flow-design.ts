import type FlowDesign from '../index.vue'
import type { useProvideState } from '../composables'

export type FlowDesignProps = InstanceType<typeof FlowDesign>['$props']

export type FlowDesignState = ReturnType<typeof useProvideState>
