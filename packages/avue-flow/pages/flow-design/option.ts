import type { AvueCrudOption, AvueCrudGroup, AvueCrudColumn, AvueTreeOption } from "@smallwei/avue";

export interface FlowDesign {
  id?: string;
  name?: string;
  categoryId?: string;
  icon?: string;
  remark?: string;
  formOption?: string;
  modelData?: string;
  assTable?: string;
}
export interface FlowCategory {
  id?: string;
  name?: string;
  code?: string;
  remark?: string;
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
    column: [{ prop: "modelDesign", labelWidth: 0, span: 24, hide: true }]
  }
];

const column: AvueCrudColumn[] = group
  .map(e => e.column!)
  .flat()
  .map(e => ({ ...e, display: false }));

export const tableOption: AvueCrudOption<FlowDesign> = {
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

export const treeOption: AvueTreeOption<FlowCategory> = {
  defaultExpandAll: true,
  props: { label: "name", value: "id" },
  filter: true,
  formOption: {
    column: [
      {
        label: "分类名称",
        prop: "name",
        rules: [{ required: true, message: "请输入分类名称" }]
      },
      {
        label: "分类标识",
        prop: "code",
        rules: [{ required: true, message: "请输入分类标识" }]
      },
      {
        label: "描述",
        prop: "remark"
      }
    ]
  }
};
