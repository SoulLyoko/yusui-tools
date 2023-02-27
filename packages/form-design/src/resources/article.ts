import type { Resource } from "../types";

export const article: Resource = {
  name: "article",
  title: "文章",
  icon: "el-icon-document",
  group: "其他组件",
  settingsValue: {
    type: "article",
    label: "",
    labelWidth: 0,
    data: { title: "文章标题", meta: "文章信息", lead: "简介", body: "正文" }
  },
  settings: [
    {
      label: "文章标题",
      prop: "datatitle",
      bind: "data.title",
      type: "textarea",
      labelPosition: "top"
    },
    {
      label: "文章信息",
      prop: "datameta",
      bind: "data.meta",
      type: "textarea",
      labelPosition: "top"
    },
    {
      label: "简介",
      prop: "datalead",
      bind: "data.lead",
      type: "textarea",
      labelPosition: "top"
    },
    {
      label: "正文",
      prop: "databody",
      bind: "data.body",
      type: "textarea",
      labelPosition: "top",
      labelTip: "支持html"
    }
  ]
};
