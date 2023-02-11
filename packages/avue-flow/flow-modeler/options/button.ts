export const flowButtonDisplayDict = [
  { label: "显示", value: "true" },
  { label: "隐藏", value: "false" },
  { label: "发起人", value: "startUser" },
  { label: "处理人", value: "assignee" },
  { label: "未发起", value: "unstarted" },
  { label: "已发起", value: "started" },
  { label: "未办结", value: "unfinished" },
  { label: "已办结", value: "finished" }
];

export const flowButtonApprovalDict = [
  { label: "不显示", value: "false" },
  { label: "审批人", value: "approver" },
  { label: "抄送人", value: "copyUser" },
  { label: "意见", value: "comment" }
];

export interface ButtonItem {
  label?: string;
  prop?: string;
  display?: string;
  approval?: string;
}

export const buttonColumn = {
  label: "",
  labelWidth: 0,
  prop: "button",
  type: "dynamic",
  children: {
    addBtn: false,
    delBtn: false,
    column: [
      { prop: "_index", hide: true },
      { label: "字段名", prop: "label", width: 100, detail: true },
      { label: "字段值", prop: "prop", width: 100, detail: true },
      {
        label: "显示条件",
        prop: "display",
        type: "select",
        multiple: true,
        dataType: "string",
        clearable: true,
        dicData: flowButtonDisplayDict
      },
      {
        label: "审批窗口",
        prop: "approval",
        type: "select",
        multiple: true,
        dataType: "string",
        clearable: true,
        dicData: flowButtonApprovalDict
      }
    ]
  },
  value: []
};
