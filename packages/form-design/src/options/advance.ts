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
    defaultValue: `({ value }) => {}`
  },
  {
    label: "点击事件",
    prop: "click",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value }) => {}`
  },
  {
    label: "获取焦点事件",
    prop: "focus",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value }) => {}`
  },
  {
    label: "失去焦点事件",
    prop: "blur",
    component: MonacoEditor,
    tooltip: true,
    defaultValue: `({ value }) => {}`
  }
];

[
  { value: 1, parentId: 1 },
  { value: 2, parentId: 1 },
  { value: 3, parentId: 1 },
  { value: 4, parentId: 1 },
  { value: 5, parentId: 2 },
  { value: 6, parentId: 2 },
  { value: 7, parentId: 2 },
  { value: 7, parentId: 2 }
];

const form = {
  自我: {
    task1: 1,
    task1score: 40,
    task2: 5,
    task2score: 40,
    task3: 9,
    task3score: 40,
    task4: 13,
    task4score: 40
  },
  项目经理: {
    task1: 1,
    task1score: 40,
    task2: 1,
    task2score: 40,
    task3: 1,
    task3score: 40,
    task4: 1,
    task4score: 40
  },
  userId: {
    task1: 1,
    task1score: 40,
    task2: 1,
    task2score: 40,
    task3: 1,
    task3score: 40,
    task4: 1,
    task4score: 40
  }
};

// const s = {
//   task1: {
//     自我: {
//       value: 1,
//       score: 40
//     },
//     项目经理: {
//       value: 2,
//       score: 30
//     },
//     主管: {
//       value: 3,
//       score: 20
//     }
//   },
//   task1: {
//     自我: {
//       value: 1,
//       score: 40
//     },
//     项目经理: {
//       value: 2,
//       score: 30
//     },
//     主管: {
//       value: 3,
//       score: 20
//     }
//   }
// };
