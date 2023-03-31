import type { Resource } from "../types";

import { merge, cloneDeep } from "lodash-es";

import { dic } from "../options";
import { DicDataSetter } from "../setters";

const dicData = merge(cloneDeep(dic), [{}, { component: DicDataSetter }]);

export const radio: Resource = {
  name: "radio",
  title: "单选框组",
  icon: "el-icon-circle-check",
  group: "表单组件",
  props: { type: "radio", label: "单选框组" },
  settings: [
    ...dicData!,
    {
      label: "边框",
      prop: "border",
      type: "switch",
      modelValue: false
    },
    {
      label: "按钮",
      prop: "button",
      type: "switch",
      modelValue: false
    }
  ]
};
