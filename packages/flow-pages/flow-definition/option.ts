import type { AvueCrudOption, AvueFormOption } from "@smallwei/avue";
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
      label: "主版本",
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

export const formOption: AvueFormOption<FlowModule> = {
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
