import type { AvueTreeOption } from "@smallwei/avue";

export interface FlowCategory {
  id?: string;
  name?: string;
  code?: string;
  remark?: string;
}

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
