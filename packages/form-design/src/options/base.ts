import type { AvueFormColumn } from "@smallwei/avue";

// import resources from "../resources";

// const resourcesDic = resources.map(e => {
//   return {
//     ...e,
//     label: e.title,
//     value: e.name
//   };
// });

export const placementDic = [
  { label: "上", value: "top" },
  { label: "下", value: "bottom" },
  { label: "左", value: "left" },
  { label: "右", value: "right" },
  { label: "上左", value: "top-start" },
  { label: "上右", value: "top-end" },
  { label: "下左", value: "bottom-start" },
  { label: "下右", value: "bottom-end" },
  { label: "左上", value: "left-start" },
  { label: "左下", value: "left-end" },
  { label: "右上", value: "right-start" },
  { label: "右下", value: "right-end" }
];

export const base: AvueFormColumn[] = [
  // {
  // label: "组件名称",
  // prop: "name"
  // type: "select",
  // dicData: resources，
  // },
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
      { label: "左", value: "left" },
      { label: "右", value: "right" },
      { label: "顶部", value: "top" }
    ]
  },
  {
    label: "组件尺寸",
    prop: "size",
    type: "radio",
    button: true,
    dicData: [
      { label: "大", value: "large" },
      { label: "默认", value: "default" },
      { label: "小", value: "small" }
    ]
  },
  {
    label: "数据类型",
    prop: "dataType",
    type: "radio",
    button: true,
    labelWidth: 90,
    labelTip: `会将数据转换为选择的数据类型，如：[1,2,3]=>"1,2,3"`,
    dicData: [
      { label: "字符", value: "string" },
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
    prop: "tip"
  },
  {
    label: "字段提示位置",
    prop: "tipPlacement",
    type: "select",
    dicData: placementDic
  },
  {
    label: "标签提示",
    prop: "labelTip"
  },
  {
    label: "标签提示位置",
    prop: "labelTipPlacement",
    type: "select",
    dicData: placementDic
  },
  {
    label: "默认值",
    prop: "value"
  },
  {
    label: "占位内容",
    prop: "placeholder"
  },
  {
    label: "是否可清空",
    prop: "clearable",
    type: "switch",
    value: true
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
        const messagePrefix = form.label || form.prop || "该字段";
        form.rules = [{ required: true, message: messagePrefix + "为必填字段" }];
      } else {
        form.rules = form.rules?.filter((e: any) => !e.required) ?? [];
      }
      return {};
    }
  }
];
