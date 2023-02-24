import { useListenerColumn } from "./listener";

export const executionListener = useListenerColumn("executionListener", {
  eventName: [
    { label: "开始", value: "start" },
    { label: "任务", value: "task" },
    { label: "结束", value: "end" }
  ]
});

export const executionListenerColumn = [executionListener];
