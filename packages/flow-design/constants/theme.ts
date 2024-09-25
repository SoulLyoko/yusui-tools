import type { LogicFlow } from '@logicflow/core'

export const defaultTheme: Partial<LogicFlow.Theme> = {
  rect: {
    radius: 5,
    stroke: 'black',
  },
  circle: {
    r: 18,
    stroke: 'black',
  },
  polygon: {
    stroke: 'black',
  },
  polyline: {
    stroke: 'black',
    hoverStroke: 'black',
    selectedStroke: 'black',
  },
  edgeText: {
    color: 'black',
  } as LogicFlow.Theme['edgeText'],
  nodeText: {
    overflowMode: 'autoWrap',
  } as LogicFlow.Theme['nodeText'],
}
