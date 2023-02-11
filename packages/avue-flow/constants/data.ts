import { getBpmnId } from "@logicflow/extension/es/bpmn/getBpmnId";

export function defaultGraphData() {
  const StartEventId = "Event_" + getBpmnId();
  const flowId = "Flow_" + getBpmnId();
  const userTaskId = "Activity_" + getBpmnId();
  return {
    flowElementList: [
      {
        incoming: [],
        outgoing: [flowId],
        dockers: [],
        type: 2,
        properties: {
          name: "开始",
          x: 160,
          y: 240,
          text: {
            x: 160,
            y: 280,
            value: "开始"
          }
        },
        key: StartEventId
      },
      {
        incoming: [flowId],
        outgoing: [],
        dockers: [],
        type: 4,
        properties: {
          name: "",
          x: 290,
          y: 240,
          text: ""
        },
        key: userTaskId
      },
      {
        incoming: [StartEventId],
        outgoing: [userTaskId],
        type: 1,
        dockers: [],
        properties: {
          name: "",
          text: "",
          startPoint: '{"x":178,"y":240}',
          endPoint: '{"x":240,"y":240}',
          pointsList: '[{"x":178,"y":240},{"x":240,"y":240}]'
        },
        key: flowId
      }
    ]
  };
}
