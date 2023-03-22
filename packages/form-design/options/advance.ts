import type { AvueFormColumn } from "@smallwei/avue";

import MonacoEditor from "../setters/monaco-editor/index.vue";
import ControlSetter from "../setters/control-setter/index.vue";

export const advance: AvueFormColumn[] = [
  {
    label: "控制其它字段",
    prop: "control",
    component: ControlSetter
  },
  {
    label: "值变化事件",
    prop: "change",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value, row }) => {}`
  },
  {
    label: "点击事件",
    prop: "click",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value, row  }) => {}`
  },
  {
    label: "获取焦点事件",
    prop: "focus",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value, row  }) => {}`
  },
  {
    label: "失去焦点事件",
    prop: "blur",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value, row  }) => {}`
  },
  {
    label: "其他属性",
    prop: "params",
    component: MonacoEditor,
    valueType: "object",
    tooltip: true,
    defaultValue: `{}`
  },
  {
    label: "其他事件",
    prop: "event",
    component: MonacoEditor,
    valueType: "object",
    tooltip: true,
    defaultValue: `{}`
  }
];
