import type { Resource } from "../types";

import { dicSelect } from "../options";

export const radio: Resource = {
  name: "radio",
  title: "单选框组",
  icon: "el-icon-circle-check",
  group: "表单组件",
  props: { type: "radio", label: "单选框组" },
  settings: [
    ...(dicSelect || []),
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
