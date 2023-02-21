import type { Resource } from "../types";

import { input } from "./input";

export const password: Resource = {
  type: "password",
  label: "密码输入",
  icon: "el-icon-lock",
  group: "表单组件",
  // 默认值
  showPassword: false,
  settings: [
    ...input.settings!,
    {
      label: "是否显示切换密码",
      prop: "showPassword",
      type: "switch",
      labelWidth: 130,
      value: false
    }
  ]
};
