import type { AvueFormColumn } from "@smallwei/avue";
import type { FlowFormData } from "../types";

export const serviceTaskColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: "类",
    prop: "className"
  },
  {
    label: "异步",
    prop: "isAsync",
    type: "switch",
    value: false
  }
];
