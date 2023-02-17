import { useListenerColumn } from "./listener";

export const taskListenerColumn = useListenerColumn("taskListener", {
  eventName: [
    { label: "创建", value: "create" },
    { label: "指派", value: "assignment" },
    { label: "完成", value: "complete" },
    { label: "删除", value: "delete" },
    { label: "更新", value: "update" },
    { label: "超时", value: "timeout" }
  ]
});
