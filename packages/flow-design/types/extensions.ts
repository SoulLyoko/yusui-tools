import type { LogicFlow, Point } from '@logicflow/core'

export interface TooltipItem {
  id?: string
  content?: string
}

export interface StyleItem {
  id?: string
  style?: LogicFlow.AppendAttributes
}

export interface ProcessData {
  type?: string
  key?: string
  properties?: {
    name?: string
    category?: string
    icon?: string
    remark?: string
    [x: string]: unknown
  }
}

export interface FlowElement {
  incoming?: string[]
  outgoing?: string[]
  children?: string[]
  type?: string
  key?: string
  groupKey?: string
  properties?: Record<string, unknown>
}

export interface FlowNode extends FlowElement {
  properties?: {
    name?: string
    text?: LogicFlow.TextConfig | string
    x?: number
    y?: number
    [x: string]: unknown
  }
}
export interface FlowEdge extends FlowElement {
  properties?: {
    name?: string
    text?: LogicFlow.TextConfig | string
    startPoint?: Point
    endPoint?: Point
    pointsList?: Point[]
    [x: string]: unknown
  }
}

export interface TurboData {
  flowElementList?: FlowElement[]
  processData?: ProcessData
  [x: string]: unknown
}
