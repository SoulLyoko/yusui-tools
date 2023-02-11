import { useListenerColumn } from "./listener";

export const executionListenerColumn = useListenerColumn("executionListener", {
  eventName: [
    { label: "开始", value: "start" },
    { label: "任务", value: "task" },
    { label: "结束", value: "end" }
  ]
});
