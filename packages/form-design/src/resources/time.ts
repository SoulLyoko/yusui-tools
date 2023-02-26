import type { Resource } from "../types";

import MonacoEditor from "../components/monaco-editor/index.vue";

export const time: Resource = {
  type: "time",
  label: "时间",
  icon: "el-icon-clock",
  group: "日期时间组件",
  settings: [
    {
      label: "开始占位内容",
      prop: "startPlaceholder"
    },
    {
      label: "结束占位内容",
      prop: "startPlaceholder"
    },
    {
      label: "显示格式",
      prop: "format",
      value: "HH:mm:ss"
    },
    {
      label: "值格式",
      prop: "valueFormat",
      value: "HH:mm:ss"
    },
    {
      label: "下拉框类名",
      prop: "popperClass"
    },
    {
      label: "范围分割符",
      prop: "rangeSpearator"
    },
    {
      label: "默认显示时间",
      prop: "defaultValue"
    },
    {
      label: "开始时间",
      prop: "start"
    },
    {
      label: "结束时间",
      prop: "end"
    },
    {
      label: "间隔时间",
      prop: "step"
    },
    {
      label: "最早时间点",
      prop: "minTime",
      labelTip: "早于该时间的时间段将被禁用"
    },
    {
      label: "最晚时间点",
      prop: "maxTime",
      labelTip: "晚于该时间的时间段将被禁用"
    },
    {
      label: "时间范围选择",
      prop: "isRange",
      type: "switch",
      value: false,
      control(val, form) {
        form.type = val ? "timerange" : "time";
        return {};
      }
    },
    {
      label: "是否可输入",
      prop: "editable",
      type: "switch",
      value: true
    },
    {
      label: "使用箭头选择",
      prop: "arrowControl",
      type: "switch",
      value: false
    },
    {
      label: "禁用小时方法",
      prop: "disabledHour",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      labelTip: "禁止选择部分小时选项`Function()`"
    },
    {
      label: "禁用分钟方法",
      prop: "disabledMinutes",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      labelTip: "禁止选择部分分钟选项`Function(selectedHour)`"
    },
    {
      label: "禁用秒方法",
      prop: "disabledSeconds",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      labelTip: "禁止选择部分秒选项`Function(selectedHour, selectedMinute)`"
    }
  ]
};

export const timerange = { ...time, label: "时间范围", type: "timerange" };
