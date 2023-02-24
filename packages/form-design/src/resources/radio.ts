import type { Resource } from "../types";

import { dic } from "./dic";

export const radio: Resource = {
  type: "radio",
  label: "单选框组",
  icon: "el-icon-circle-check",
  group: "表单组件",
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
