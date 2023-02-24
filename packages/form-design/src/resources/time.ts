import type { Resource } from "../types";

export const time: Resource = {
  type: "time",
  label: "时间选择",
  icon: "el-icon-clock",
  group: "表单组件",
  settings: [
    {
      label: "开始占位内容",
      prop: "startPlaceholder",
      labelWidth: 100
    },
    {
      label: "结束占位内容",
      prop: "startPlaceholder",
      labelWidth: 100
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
      prop: "defaultValue",
      labelWidth: 100
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
      labelWidth: 100,
      labelTip: "早于该时间的时间段将被禁用"
    },
    {
      label: "最晚时间点",
      prop: "maxTime",
      labelWidth: 100,
      labelTip: "晚于该时间的时间段将被禁用"
    },
    {
      label: "时间范围选择",
      prop: "isRange",
      type: "switch",
      value: false,
      labelWidth: 100,
      control(val, form) {
        form.type = val ? "timerange" : "time";
        return {};
      }
    },
    {
      label: "是否可输入",
      prop: "editable",
      type: "switch",
      value: true,
      labelWidth: 100
    },
    {
      label: "使用箭头选择",
      prop: "arrowControl",
      type: "switch",
      value: false,
      labelWidth: 100
    },
    {
      label: "禁用小时方法",
      prop: "disabledHour",
      type: "textarea",
      labelPosition: "top",
      labelTip: "禁止选择部分小时选项`Function()`"
    },
    {
      label: "禁用分钟方法",
      prop: "disabledMinutes",
      type: "textarea",
      labelPosition: "top",
      labelTip: "禁止选择部分分钟选项`Function(selectedHour)`"
    },
    {
      label: "禁用秒方法",
      prop: "disabledSeconds",
      type: "textarea",
      labelPosition: "top",
      labelTip: "禁止选择部分秒选项`Function(selectedHour, selectedMinute)`"
    }
  ]
};

export const timerange = { ...time, label: "时间范围选择", type: "timerange" };
