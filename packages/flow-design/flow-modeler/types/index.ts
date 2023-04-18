import type FlowModeler from '../index.vue'
import type { useProvideModelerState } from '../composables'

export type ModelerProps = InstanceType<typeof FlowModeler>['$props']

export type ModelerState = ReturnType<typeof useProvideModelerState>
