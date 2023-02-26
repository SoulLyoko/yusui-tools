import type { Resource } from "../types";

import { iconList } from "./icon";

export const password: Resource = {
  type: "password",
  label: "密码输入框",
  icon: "el-icon-lock",
  group: "表单组件",
  // 默认值
  showPassword: false,
  settings: [
    {
      label: "最大长度",
      prop: "maxlength",
      type: "number"
    },
    {
      label: "前缀图标",
      prop: "prefixIcon",
      type: "icon",
      iconList: iconList
    },
    {
      label: "后缀图标",
      prop: "suffixIcon",
      type: "icon",
      iconList: iconList
    },
    {
      label: "是否显示切换密码",
      prop: "showPassword",
      type: "switch",
      labelWidth: 130,
      value: false
    }
  ]
};
