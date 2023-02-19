export const input = [
  {
    label: "最大长度",
    prop: "maxlength",
    type: "number"
  },
  {
    label: "最小长度",
    prop: "minlength",
    type: "number"
  },
  {
    label: "是否显示统计字数",
    prop: "showWordLimit",
    type: "switch",
    labelWidth: 130
  },
  {
    label: "占位文本",
    prop: "placeholder"
  },
  {
    label: "是否显示清除按钮",
    prop: "clearable",
    type: "switch",
    labelWidth: 130
  },
  {
    label: "是否显示切换密码",
    prop: "showPassword",
    type: "switch",
    labelWidth: 130
  },
  {
    label: "前缀图标",
    prop: "prefixIcon"
  },
  {
    label: "后缀图标",
    prop: "suffixIcon"
  },
  {
    label: "输入框行数",
    prop: "rows",
    type: "number"
  },
  {
    label: "高度是否自适应",
    prop: "autosize",
    type: "switch",
    labelWidth: 130
  },
  {
    label: "自动填充",
    prop: "autocomplete",
    type: "switch",
    dicData: [
      { label: "", value: "off" },
      { label: "", value: "on" }
    ],
    labelWidth: 130
  }
];
export const password = input;
