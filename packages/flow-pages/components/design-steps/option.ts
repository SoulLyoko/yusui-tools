import type { AvueFormOption } from "@smallwei/avue";
import type { FlowDefinition } from "../../api/flow-definition";
import type { FlowDeploy } from "../../api/flow-deploy";

export const formOption: AvueFormOption<FlowDefinition | FlowDeploy> = {
  menuBtn: false,
  span: 24,
  column: [
    {
      label: "流程名称",
      prop: "flowName",
      rules: [{ required: true, message: "请输入流程名称" }]
    },
    {
      label: "流程标识",
      prop: "flowKey",
      rules: [{ required: true, message: "请输入流程标识" }]
    },
    {
      label: "流程分类",
      prop: "groupId",
      type: "select",
      dicUrl: "/sapier-flow/flow-category/list",
      props: { label: "name", value: "id" }
    },
    {
      label: "流程图标",
      prop: "icon",
      component: "icon-select"
    },
    {
      label: "流程描述",
      prop: "remarks"
    }
  ]
};
