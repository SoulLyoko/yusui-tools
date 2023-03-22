import { completionCondition } from "./multiInstance";

export const inout = {
  label: "网关类型",
  prop: "inout",
  type: "radio",
  button: true,
  value: "in",
  dicData: [
    { label: "进", value: "in" },
    { label: "出", value: "out" }
  ]
};
export const gatewayColumn = [inout, completionCondition];
