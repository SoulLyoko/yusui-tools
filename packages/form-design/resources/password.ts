import type { Resource } from "../types";

import { iconList } from "../options";
import { SwitchSetter } from "../setters";

export const password: Resource = {
  name: "password",
  title: "密码输入框",
  icon: "el-icon-lock",
  group: "表单组件",
  props: { type: "password", label: "密码输入框" },
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
      component: SwitchSetter,
      defaultValue: false,
      labelWidth: 130
    }
  ]
};
