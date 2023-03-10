import type { Resource } from "../types";

import { useDicSettings } from "../options/dic";

export const radio: Resource = {
  name: "radio",
  title: "单选框组",
  icon: "el-icon-circle-check",
  group: "表单组件",
  props: { type: "radio", label: "单选框组" },
  settings: [
    ...useDicSettings(),
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
