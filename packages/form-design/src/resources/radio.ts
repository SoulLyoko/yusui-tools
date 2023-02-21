import { dic } from "./dic";

export const radio = {
  type: "radio",
  label: "单选框组",
  icon: "el-icon-circle-check",
  group: "表单组件",
  // 默认值
  settings: [
    ...dic.settings!,
    {
      label: "边框",
      prop: "border",
      type: "switch",
      value: false
    },
    {
      label: "按钮",
      prop: "button",
      type: "switch",
      value: false
    }
  ]
};
