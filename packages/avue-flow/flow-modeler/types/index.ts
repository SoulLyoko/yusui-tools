import type FlowModeler from "../index.vue";
import type { useModelerState } from "../composables";

export type ModelerProps = InstanceType<typeof FlowModeler>["$props"];

export type ModelerState = ReturnType<typeof useModelerState>;
