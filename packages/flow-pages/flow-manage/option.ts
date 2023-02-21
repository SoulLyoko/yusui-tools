import type { AvueCrudOption, AvueCrudGroup, AvueCrudColumn } from "@smallwei/avue";

export interface FlowManage {
  id?: string;
  name?: string;
  categoryId?: string;
  icon?: string;
  remark?: string;
  formOption?: string;
  modelData?: string;
  assTable?: string;
}

const group: AvueCrudGroup[] = [
  {
    label: "流程信息",
    column: [
      {
        label: "流程名称",
        prop: "name",
        rules: [{ required: true, message: "请输入流程名称" }]
      },
      {
        label: "流程分类",
        prop: "categoryId",
        rules: [{ required: true, message: "请选择流程分类" }]
      },
      {
        label: "流程图标",
        prop: "icon",
        rules: [{ required: true, message: "请选择流程图标" }]
      },
      {
        label: "流程描述",
        prop: "remark"
      },
      {
        label: "流程表单",
        prop: "formOption",
        hide: true
      },
      {
        label: "流程模型",
        prop: "modelData",
        hide: true
      },
      {
        label: "关联表",
        prop: "assTable",
        hide: true
      }
    ]
  },
  {
    label: "表单设计",
    column: [{ prop: "formDesign", labelWidth: 0, span: 24, hide: true }]
  },
  {
    label: "模型设计",
    column: [{ prop: "flowDesign", labelWidth: 0, span: 24, hide: true }]
  }
];

const column: AvueCrudColumn[] = group
  .map(e => e.column!)
  .flat()
  .map(e => ({ ...e, display: false }));

export const tableOption: AvueCrudOption<FlowManage> = {
  rowKey: "id",
  align: "center",
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  tabs: true,
  dialogFullscreen: true,
  column,
  group
};
