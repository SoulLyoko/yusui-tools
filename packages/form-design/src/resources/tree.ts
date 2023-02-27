import type { Resource } from "../types";

import { useDicSettings } from "../options/dic";

export const tree: Resource = {
  name: "tree",
  title: "树形选择",
  icon: "el-icon-files",
  group: "表单组件",
  settingsValue: { type: "tree", label: "树形选择" },
  settings: [...useDicSettings(true)]
};
