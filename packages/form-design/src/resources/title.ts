import type { Resource } from "../types";

import MonacoEditor from "../components/monaco-editor/index.vue";

export const title: Resource = {
  type: "title",
  label: "标题",
  icon: "el-icon-minus",
  group: "其他组件",
  settings: [
    {
      label: "标题内容",
      prop: "modelValue",
      type: "textarea",
      labelPosition: "top"
    },
    {
      label: "样式",
      prop: "styles",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: "{}"
    }
  ]
};
