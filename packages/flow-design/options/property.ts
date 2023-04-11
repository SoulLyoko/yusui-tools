import type { AvueFormColumn } from "@smallwei/avue";
import type { FlowFormData } from "../types";

export const propertyColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: "",
    labelWidth: 0,
    prop: "property",
    type: "dynamic",
    children: {
      column: [
        { label: "属性名", prop: "name" },
        { label: "属性值", prop: "value", type: "textarea", minRows: 1 }
      ]
    },
    value: []
  }
];
