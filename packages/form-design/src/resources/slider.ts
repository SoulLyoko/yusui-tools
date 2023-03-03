import type { Resource } from "../types";

import MonacoEditor from "../setters/monaco-editor/index.vue";
import { placementDic } from "../options";

export const slider: Resource = {
  name: "slider",
  title: "滑块",
  icon: "el-icon-operation",
  group: "表单组件",
  settingsValue: { type: "slider", label: "滑块" },
  settings: [
    {
      label: "最小值",
      prop: "min",
      type: "number"
    },
    {
      label: "最大值",
      prop: "max",
      type: "number"
    },
    {
      label: "步长",
      prop: "step",
      type: "number"
    },
    {
      label: "显示输入框",
      prop: "showInput",
      type: "switch",
      value: false
    },
    {
      label: "输入控制按钮",
      prop: "showInputControls",
      type: "switch",
      value: true
    },
    {
      label: "显示间断点",
      prop: "showStops",
      type: "switch",
      value: false
    },
    {
      label: "显示提示信息",
      prop: "showTooltip",
      type: "switch",
      value: true
    },
    {
      label: "提示信息类名",
      prop: "tooltipClase"
    },
    {
      label: "提示信息位置",
      prop: "placement",
      type: "select",
      dicData: placementDic
    },
    {
      label: "格式化提示信息",
      prop: "formatTooltip",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: "(value) => value"
    },
    {
      label: "开启选择范围",
      prop: "range",
      type: "switch",
      value: false
    },
    {
      label: "垂直模式",
      prop: "vertical",
      type: "switch",
      value: false
    },
    {
      label: "滑块高度",
      prop: "height",
      type: "number",
      labelTip: "垂直模式必填"
    },
    {
      label: "标记",
      prop: "marks",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: `{}`,
      labelTip: "标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式"
    }
  ]
};
