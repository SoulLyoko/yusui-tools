import type { AvueFormColumn } from "@smallwei/avue";
import type { FlowFormData } from "../types";

export const gatewayColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: "网关类型",
    prop: "inout",
    type: "radio",
    button: true,
    value: "in",
    dicData: [
      { label: "进", value: "in" },
      { label: "出", value: "out" }
    ]
  },
  {
    label: "完成条件",
    prop: "completionCondition",
    type: "slider",
    showInput: true,
    showInputControls: false,
    labelPosition: "top" as const,
    step: 0.01,
    max: 1,
    value: 0,
    labelTip: "任务完成的百分比，如2人接收，需同时完成才往下进行时=100%，只需1人完成时=50%",
    span: 23,
    offset: 1
  }
];
