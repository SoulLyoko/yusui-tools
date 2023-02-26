import type { Resource } from "../types";

import { useDicSettings } from "./dic";

export const tree: Resource = {
  type: "tree",
  label: "树形选择",
  icon: "el-icon-files",
  group: "表单组件",
  settings: [...useDicSettings(true)]
};
