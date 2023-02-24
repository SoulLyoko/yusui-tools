import type { Resource } from "../types";

import { dic } from "./dic";

export const select: Resource = {
  type: "select",
  label: "选择框",
  icon: "el-icon-arrow-down",
  group: "表单组件",
  settings: [
    ...dic.settings!,
    {
      label: "最多选择项",
      prop: "limit",
      type: "number"
    },
    {
      label: "加载文本",
      prop: "loadingText"
    },
    {
      label: "无匹配文字",
      prop: "noMatchText"
    },
    {
      label: "无选项文字",
      prop: "noDataText"
    },
    {
      label: "下拉框类名",
      prop: "popper-class"
    },
    {
      label: "是否多选",
      prop: "multiple",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "是否折叠标签",
      prop: "tags",
      type: "switch",
      labelWidth: 130,
      value: false,
      labelTip: "多选模式下是否折叠Tag"
    },
    {
      label: "是否可筛选",
      prop: "filterable",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "允许创建新条目",
      prop: "allowCreate",
      type: "switch",
      labelWidth: 130,
      value: false,
      labelTip: "需配合filterable使用"
    },
    {
      label: "默认选择第一项",
      prop: "defaultFirstOption",
      type: "switch",
      labelWidth: 130,
      value: false,
      labelTip: "是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用"
    },
    {
      label: "远程加载",
      prop: "remote",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "插入至body元素",
      prop: "poperAppendToBody",
      type: "switch",
      labelWidth: 130,
      value: true
    },
    {
      label: "虚拟化选择器",
      prop: "virtualize",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "是否显示全选",
      prop: "all",
      type: "switch",
      labelWidth: 130,
      value: false
    }
  ]
};
