import type { Resource } from "../types";

import MonacoEditor from "../components/monaco-editor/index.vue";

export const rate: Resource = {
  type: "rate",
  label: "评分",
  icon: "el-icon-star",
  group: "表单组件",
  settings: [
    {
      label: "是否允许半选",
      prop: "allowHalf",
      type: "switch",
      value: false
    },
    {
      label: "最大分值",
      prop: "max",
      type: "number",
      value: 5
    },
    {
      label: "低分界限值",
      prop: "lowThreshold",
      type: "number",
      value: 2,
      labelTip: "低分和中等分数的界限值，值本身被划分在低分中"
    },
    {
      label: "高分界限值",
      prop: "highThreshold",
      type: "number",
      value: 4,
      labelTip: "高分和中等分数的界限值，值本身被划分在高分中"
    },
    {
      label: "颜色数组",
      prop: "colors",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: "{}",
      labelTip:
        "若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色"
    },
    {
      label: "未选中颜色",
      prop: "voidColor"
    },
    {
      label: "未选颜色(禁用)",
      prop: "disabledVoidColor",
      labelWidth: 110
    },
    {
      label: "图标数组",
      prop: "icons",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: "{}",
      labelTip:
        "若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的图标；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的图标"
    },
    {
      label: "未选中图标",
      prop: "voidIcon"
    },
    {
      label: "未选图标(禁用)",
      prop: "disabledVoidIcon",
      labelWidth: 110
    },
    {
      label: "显示辅助文字",
      prop: "showText",
      type: "switch",
      value: false,
      labelWidth: 120,
      labelTip: "是否显示辅助文字，若为是，则会从 辅助文字数组 中选取当前分数对应的文字内容"
    },
    {
      label: "显示当前分数",
      prop: "showScore",
      type: "switch",
      value: false,
      labelWidth: 120,
      labelTip: "是否显示当前分数，当前分数 和 辅助文字 不能同时显示"
    },
    {
      label: "辅助文字数组",
      prop: "texts",
      type: "array"
    },
    {
      label: "分数显示模板",
      prop: "scoreTemplate"
    }
  ]
};
