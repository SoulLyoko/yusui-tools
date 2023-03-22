import type { AvueFormOption } from "@smallwei/avue";
import type { FlowDefinition } from "../../api/flow-definition";

export const formOption: AvueFormOption<FlowDefinition> = {
  menuBtn: false,
  span: 24,
  column: [
    {
      label: "流程名称",
      prop: "flowName",
      rules: [{ required: true, message: "请输入流程名称" }]
    },
    {
      label: "流程KEY",
      prop: "flowKey",
      rules: [{ required: true, message: "请输入流程KEY" }]
    },
    {
      label: "流程分类",
      prop: "groupId"
    },
    // {
    //   label: "流程图标",
    //   prop: "icon"
    // },
    {
      label: "流程描述",
      prop: "remarks"
    }
  ]
};
