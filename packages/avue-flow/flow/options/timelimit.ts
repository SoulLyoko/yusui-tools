export interface TimelimitItem {
  name?: string;
  min?: string;
  max?: string;
}

export const timelimitColumn = {
  label: "",
  labelWidth: 0,
  prop: "timelimit",
  type: "dynamic",
  children: {
    column: [
      { label: "名称", prop: "name" },
      { label: "最小值", prop: "min", type: "number" },
      { label: "最大值", prop: "max", type: "number" }
    ]
  },
  value: []
};
