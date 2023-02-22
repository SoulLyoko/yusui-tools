import type { AvueFormColumn } from "@smallwei/avue";

import { defaultResourceList } from "../../left-panel/components/resource";

const typeDic = defaultResourceList.map(g => {
  return {
    label: g.label,
    groups: g.children.map(l => {
      return {
        label: l.label,
        value: l.type
      };
    })
  };
});

export const base: AvueFormColumn[] = [
  {
    label: "类型",
    prop: "type",
    type: "select",
    group: true,
    dicData: typeDic
  },
  {
    label: "字段标识",
    prop: "prop"
  },
  {
    label: "标签标题",
    prop: "label"
  },
  {
    label: "标签宽度",
    prop: "labelWidth",
    type: "number",
    step: 10
  },
  {
    label: "标签位置",
    prop: "labelPosition",
    type: "radio",
    button: true,
    value: "left",
    dicData: [
      { label: "左对齐", value: "left" },
      { label: "右对齐", value: "right" },
      { label: "顶部", value: "top" }
    ]
  },
  {
    label: "数据类型",
    prop: "dataType",
    type: "radio",
    button: true,
    dicData: [
      { label: "字符串", value: "string" },
      { label: "数字", value: "number" },
      { label: "数组", value: "array" }
    ]
  },
  {
    label: "表单项栅格",
    prop: "span",
    type: "number",
    min: 1,
    max: 24
  },
  {
    label: "字段提示",
    prop: "tip",
    control(tip: string) {
      return {
        tipPlacement: { display: !!tip }
      };
    }
  },
  {
    label: "字段提示位置",
    prop: "tipPlacement",
    type: "radio",
    button: true,
    value: "top",
    dicData: [
      { label: "上", value: "top" },
      { label: "下", value: "bottom" },
      { label: "左", value: "left" },
      { label: "右", value: "right" }
    ]
  },
  {
    label: "标签提示",
    prop: "labelTip",
    control(labelTip: string) {
      return {
        labelTipPlacement: { display: !!labelTip }
      };
    }
  },
  {
    label: "标签提示位置",
    prop: "labelTipPlacement",
    type: "radio",
    button: true,
    value: "top",
    dicData: [
      { label: "上", value: "top" },
      { label: "下", value: "bottom" },
      { label: "左", value: "left" },
      { label: "右", value: "right" }
    ]
  },
  {
    label: "默认值",
    prop: "value"
  },
  {
    label: "详情模式",
    prop: "detail",
    type: "switch",
    value: false
  },
  {
    label: "是否只读",
    prop: "readonly",
    type: "switch",
    value: false
  },
  {
    label: "是否禁用",
    prop: "disabled",
    type: "switch",
    value: false
  },
  {
    label: "是否可见",
    prop: "display",
    type: "switch",
    value: true
  },
  {
    label: "是否必填",
    prop: "required",
    type: "switch",
    value: false,
    control(required: boolean, form: any) {
      if (required) {
        form.rules = [{ required: true, message: form.label + "必须填写" }];
      } else {
        delete form.rules;
      }
      return {};
    }
  }
];
