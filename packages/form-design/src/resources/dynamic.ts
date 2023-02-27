import type { Resource } from "../types";

export const dynamic: Resource = {
  name: "dynamic",
  title: "子表单",
  icon: "el-icon-grid",
  group: "布局组件",
  container: "children.column",
  settingsValue: { type: "dynamic", label: "子表单", labelPosition: "top", children: { column: [] } },
  settings: [
    {
      label: "展示类型",
      prop: "type",
      type: "radio",
      button: true,
      value: "crud",
      dicData: [
        { label: "表格", value: "crud" },
        { label: "表单", value: "form" }
      ],
      control(type: string, form: any) {
        form.childrenindex = type === "form" ? false : "";
        form.children.index = form.childrenindex;
        return {
          childrenindex: { display: type === "form" },
          childrenshowHeader: { display: type === "crud" },
          childrenstripe: { display: type === "crud" },
          childrenborder: { display: type === "crud" },
          childrenheaderAlign: { display: type === "crud" },
          childrenalign: { display: type === "crud" }
        };
      }
    },
    {
      label: "显示新增按钮",
      prop: "addBtn",
      type: "switch",
      value: true
    },
    {
      label: "显示删除按钮",
      prop: "delBtn",
      type: "switch",
      value: true
    },
    {
      label: "显示表头",
      prop: "showHeader",
      type: "switch",
      value: true
    },
    {
      label: "斑马纹",
      prop: "stripe",
      type: "switch",
      value: false
    },
    {
      label: "表格边框",
      prop: "border",
      type: "switch",
      value: false
    },
    {
      label: "表头对齐方式",
      prop: "headerAlign",
      type: "radio",
      button: true,
      dicData: [
        { label: "左", value: "left" },
        { label: "中", value: "center" },
        { label: "右", value: "right" }
      ]
    },
    {
      label: "对齐方式",
      prop: "align",
      type: "radio",
      button: true,
      dicData: [
        { label: "左", value: "left" },
        { label: "中", value: "center" },
        { label: "右", value: "right" }
      ]
    },
    {
      label: "显示序号",
      prop: "index",
      type: "switch",
      value: ""
    },
    {
      label: "表单项栅格",
      prop: "span",
      type: "number"
    }
    // {
    //   label: "限制最大行数",
    //   prop: "limit",
    //   type: "number"
    // },
  ].map(e => {
    return {
      ...e,
      prop: `children${e.prop}`,
      bind: `children.${e.prop}`
    };
  })
};
