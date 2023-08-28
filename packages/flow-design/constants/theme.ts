import type { Theme } from '@logicflow/core/types/constant/DefaultTheme'

export const defaultTheme: Theme = {
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
  },
  nodeText: {
    // overflowMode: 'autoWrap', // 会导致节点很难点击
  },
}
