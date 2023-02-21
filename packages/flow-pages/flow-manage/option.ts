import type { AvueCrudOption } from "@smallwei/avue";
import type { FlowDefinition } from "../api/flow-definition";

export const tableOption: AvueCrudOption<FlowDefinition> = {
  rowKey: "flowModuleId",
  align: "center",
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  tabs: true,
  dialogFullscreen: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  column: [
    {
      label: "流程名称",
      prop: "flowName"
    },
    {
      label: "流程KEY",
      prop: "flowKey"
    },
    {
      label: "流程分类",
      prop: "groupId"
    },
    {
      label: "流程主版本",
      prop: "mainVersion",
      formatter(row, value) {
        return value ? `V:${value || ""}` : "";
      }
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
