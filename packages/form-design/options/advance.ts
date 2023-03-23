import type { AvueFormOption, AvueFormGroup } from "@smallwei/avue";

import { EditorSetter, ControlSetter } from "../setters";

export const advance: AvueFormOption & AvueFormGroup = {
  label: "高级",
  prop: "advance",
  column: [
    {
      label: "控制其它字段",
      prop: "control",
      component: ControlSetter
    },
    {
      label: "值变化事件",
      prop: "change",
      component: EditorSetter,
      tooltip: true,
      defaultValue: `({ value, row }) => {}`
    },
    {
      label: "点击事件",
      prop: "click",
      component: EditorSetter,
      tooltip: true,
      defaultValue: `({ value, row  }) => {}`
    },
    {
      label: "获取焦点事件",
      prop: "focus",
      component: EditorSetter,
      tooltip: true,
      defaultValue: `({ value, row  }) => {}`
    },
    {
      label: "失去焦点事件",
      prop: "blur",
      component: EditorSetter,
      tooltip: true,
      defaultValue: `({ value, row  }) => {}`
    },
    {
      label: "其他属性",
      prop: "params",
      component: EditorSetter,
      valueType: "object",
      tooltip: true,
      defaultValue: `{}`
    },
    {
      label: "其他事件",
      prop: "event",
      component: EditorSetter,
      valueType: "object",
      tooltip: true,
      defaultValue: `{}`
    }
  ]
};
