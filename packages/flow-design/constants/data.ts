import type { TurboData } from '../extensions'

import { bpmnUtils } from '@logicflow/extension'

export function defaultGraphData(): TurboData {
  const processId = `Process_${bpmnUtils.genBpmnId()}`
  const StartEventId = `Event_${bpmnUtils.genBpmnId()}`
  const flowId = `Flow_${bpmnUtils.genBpmnId()}`
  const userTaskId = `Activity_${bpmnUtils.genBpmnId()}`
  return {
    processData: {
      type: 'process',
      key: processId,
      properties: {},
    },
    flowElementList: [
      {
        incoming: [],
        outgoing: [flowId],
        type: 'startEvent',
        key: StartEventId,
        properties: {
          name: '开始',
          x: 160,
          y: 240,
          text: {
            x: 160,
            y: 280,
            value: '开始',
          },
        },
      },
      {
        incoming: [flowId],
        outgoing: [],
        type: 'userTask',
        key: userTaskId,
        properties: {
          name: '发起人',
          x: 290,
          y: 240,
          text: {
            x: 290,
            y: 240,
            value: '发起人',
          },
        },
      },
      {
        incoming: [StartEventId],
        outgoing: [userTaskId],
        type: 'sequenceFlow',
        key: flowId,
        properties: {
          name: '',
          text: '',
          startPoint: { x: 178, y: 240 },
          endPoint: { x: 240, y: 240 },
          pointsList: [
            { x: 178, y: 240 },
            { x: 240, y: 240 },
          ],
        },
      },
    ],
  }
}
