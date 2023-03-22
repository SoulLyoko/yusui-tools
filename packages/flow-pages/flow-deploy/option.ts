import type { AvueCrudOption } from "@smallwei/avue";
import type { FlowDeploy } from "../api/flow-deploy";

export const tableOption: AvueCrudOption<FlowDeploy> = {
  rowKey: "flowDeloyId",
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
  menuWidth: 250,
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
      label: "流程版本",
      prop: "version",
      formatter(row, value) {
        return value ? `V${value || ""}` : "";
      }
    },
    {
      label: "是否主版本",
      prop: "mainVersion",
      type: "select",
      dicData: [
        { label: "否", value: 0 },
        { label: "是", value: 1 }
      ]
    }
  ]
};
