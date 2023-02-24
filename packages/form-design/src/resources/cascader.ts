import type { Resource } from "../types";

import { dic } from "./dic";

export const cascader: Resource = {
  type: "cascader",
  label: "级联选择器",
  icon: "el-icon-connection",
  group: "表单组件",
  settings: [
    ...dic.settings!,
    {
      label: "分隔字符",
      prop: "separator"
    },
    {
      label: "展开方式",
      prop: "expandTrigger",
      type: "radio",
      button: true,
      dicData: [
        { label: "点击", value: "click" },
        { label: "悬停", value: "hover" }
      ]
    },
    {
      label: "显示完整路径",
      prop: "showAllLevels",
      type: "switch",
      labelWidth: 130,
      value: true
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
      label: "是否多选",
      prop: "multiple",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "父子不关联",
      prop: "checkStrictly",
      type: "switch",
      labelWidth: 130,
      value: false,
      labelTip: "是否严格的遵守父子节点不互相关联"
    },
    {
      label: "返回完整路径",
      prop: "emitPath",
      type: "switch",
      labelWidth: 130,
      value: true,
      labelTip: "在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值"
    },
    {
      label: "动态加载子节点",
      prop: "lazy",
      type: "switch",
      labelWidth: 130,
      value: false,
      labelTip: "是否动态加载子节点，需与 lazyLoad 方法结合使用"
    },
    {
      label: "动态加载方法",
      prop: "lazyLoad",
      type: "textarea",
      labelPosition: "top",
      labelTip: "加载动态数据的方法，仅在 lazy 为 true 时有效"
    }
  ]
};
