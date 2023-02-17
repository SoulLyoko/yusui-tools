export interface SerialItem {
  name?: string;
  prefix?: string;
  dateFormat?: string;
  suffixLength?: string;
  startSequence?: string;
  connector?: string;
  cycle?: string;
}

export const serialColumn = {
  label: "",
  labelWidth: 0,
  prop: "serial",
  type: "dynamic",
  children: {
    addBtn: false,
    delBtn: false,
    index: false,
    type: "form" as const,
    column: [
      { label: "名称", prop: "name" },
      { label: "前缀", prop: "prefix" },
      { label: "日期格式", prop: "dateFormat" },
      { label: "后缀位数", prop: "suffixLength" },
      { label: "初始数值", prop: "startSequence" },
      { label: "连接符", prop: "connector" },
      {
        label: "重置周期",
        prop: "cycle",
        type: "select",
        dicData: [
          { label: "不重置", value: "none" },
          { label: "按天重置", value: "day" },
          { label: "按周重置", value: "week" },
          { label: "按月重置", value: "month" },
          { label: "按年重置", value: "year" }
        ]
      }
    ]
  },
  value: [{ name: "", prefix: "", dateFormat: "", suffixLength: "", startSequence: "", connector: "", cycle: "" }]
};
