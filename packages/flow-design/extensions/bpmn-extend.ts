import type { GraphModel, LogicFlow, NodeConfig } from '@logicflow/core'

import { HtmlNode, HtmlNodeModel, PolygonNode, PolygonNodeModel, h } from '@logicflow/core'
import { getBpmnId } from '@logicflow/extension/es/bpmn/getBpmnId'
import {
  GroupNode,
  RectResize,
  EndEventModel as _EndEventModel,
  EndEventView as _EndEventView,
  ExclusiveGatewayModel as _ExclusiveGatewayModel,
  ExclusiveGatewayView as _ExclusiveGatewayView,
  Group as _Group,
  SequenceFlowModel as _SequenceFlowModel,
  SequenceFlowView as _SequenceFlowView,
  ServiceTaskModel as _ServiceTaskModel,
  ServiceTaskView as _ServiceTaskView,
  StartEventModel as _StartEventModel,
  StartEventView as _StartEventView,
  UserTaskModel as _UserTaskModel,
  UserTaskView as _UserTaskView,
} from '@logicflow/extension'

/** process */
export class ProcessModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 0
    this.height = 0
  }
}
export class ProcessView extends HtmlNode {}
/** startEvent */
export class StartEventModel extends _StartEventModel {}
export class StartEventView extends _StartEventView {}
/** endEvent */
export class EndEventModel extends _EndEventModel {}
export class EndEventView extends _EndEventView {
  getShape() {
    const model = this.props.model
    const style = model.getNodeStyle()
    const { x, y, r } = model
    return h('circle', { ...style, cx: x, cy: y, r, strokeWidth: 5 })
  }
}
/** exclusiveGateway */
export class ExclusiveGatewayModel extends _ExclusiveGatewayModel {
  constructor(data: NodeConfig, graphModel: GraphModel) {
    const { id, text, x, y } = data
    data.id = id || `Gateway_${getBpmnId()}`
    data.text = text || { value: text || '', x, y: y + 40 }
    super(data, graphModel)
    this.points = [
      [25, 0],
      [50, 25],
      [25, 50],
      [0, 25],
    ]
  }
}
export class ExclusiveGatewayView extends _ExclusiveGatewayView {
  getShape() {
    const { model } = this.props
    const { x, y, width, height, points } = model
    const style = model.getNodeStyle()
    return h(
      'g',
      { transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})` },
      h('polygon', { ...style, x, y, points }),
      h('line', { ...style, x1: 15, y1: 15, x2: 35, y2: 35 }),
      h('line', { ...style, x1: 35, y1: 15, x2: 15, y2: 35 }),
    )
  }
}
/** parallelGateway */
export class ParallelGatewayModel extends PolygonNodeModel {
  constructor(data: NodeConfig, graphModel: GraphModel) {
    const { id, text, x, y } = data
    data.id = id || `Gateway_${getBpmnId()}`
    data.text = text || { value: text || '', x, y: y + 40 }
    super(data, graphModel)
    this.points = [
      [25, 0],
      [50, 25],
      [25, 50],
      [0, 25],
    ]
  }
}
export class ParallelGatewayView extends PolygonNode {
  getShape() {
    const { model } = this.props
    const { x, y, width, height, points } = model
    const style = model.getNodeStyle()
    return h(
      'g',
      { transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})` },
      h('polygon', { ...style, x, y, points }),
      h('line', { ...style, x1: 10, y1: 25, x2: 40, y2: 25 }),
      h('line', { ...style, x1: 25, y1: 10, x2: 25, y2: 40 }),
    )
  }
}
/** userTask */
export class UserTaskModel extends _UserTaskModel {}
export class UserTaskView extends _UserTaskView {}
/** serviceTask */
export class ServiceTaskModel extends _ServiceTaskModel {
  isAllowConnectedAsSource() {
    return false
  }
}
export class ServiceTaskView extends _ServiceTaskView {}
/** sequenceFlow */
export class SequenceFlowModel extends _SequenceFlowModel {
  getTextPosition() {
    const { x, y } = this.text
    return (x && y) ? { x, y } : (this.dbClickPosition || { x: 0, y: 0 })
  }
}
export class SequenceFlowView extends _SequenceFlowView {}
/** note */
const RectResizeModel = RectResize.model as any
const RectResizeView = RectResize.view as any
export class NoteModel extends RectResizeModel {
  createId() {
    return `Note_${getBpmnId()}`
  }

  initNodeData(data: any) {
    super.initNodeData(data)
    this.height = 40
    this.text.draggable = false
  }

  isAllowConnectedAsSource() {
    return false
  }

  getNodeStyle() {
    const style = super.getNodeStyle()
    style.strokeDasharray = '3 3'
    style.fill = 'transparent'
    return style
  }
}
export class NoteView extends RectResizeView { }
/** noteFlow */
export class NoteFlowModel extends _SequenceFlowModel {
  getEdgeStyle() {
    const style = super.getEdgeStyle()
    style.strokeDasharray = '3 3'
    return style
  }

  getTextPosition() {
    const { x, y } = this.text
    return (x && y) ? { x, y } : (this.dbClickPosition || { x: 0, y: 0 })
  }
}
export class NoteFlowView extends _SequenceFlowView {}
/** group */
const GroupNodeModel = GroupNode.model as any
export class GroupModel extends GroupNodeModel {
  createId() {
    return `Group_${getBpmnId()}`
  }

  initNodeData(data: NodeConfig) {
    super.initNodeData(data)
    this.resizable = true
    this.foldable = true
    // this.text.editable = true;
  }

  addChild(id: string) {
    super.addChild(id)
    this.graphModel.nodesMap[id]?.model?.setProperty('groupKey', this.id)
  }

  removeChild(id: string) {
    super.removeChild(id)
    this.graphModel.nodesMap[id]?.model?.deleteProperty('groupKey')
  }
}
export class GroupView extends GroupNode.view {}
export class Group extends _Group {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    lf.register({ type: 'group', model: GroupModel, view: GroupView })
    // 原来的deleteGroupChild函数有bug
    lf.off('node:delete', this.deleteGroupChild)
    lf.on('node:delete', ({ data }) => {
      // 如果删除的是分组节点，则同时删除分组的子节点
      if (data.children) {
        data.children.forEach((nodeId: string) => {
          this.nodeGroupMap.delete(nodeId)
          this.lf.deleteNode(nodeId)
        })
      }
    })
  }
}

const plugins = [
  { type: 'process', model: ProcessModel, view: ProcessView },
  { type: 'startEvent', model: StartEventModel, view: StartEventView },
  { type: 'endEvent', model: EndEventModel, view: EndEventView },
  { type: 'exclusiveGateway', model: ExclusiveGatewayModel, view: ExclusiveGatewayView },
  { type: 'parallelGateway', model: ParallelGatewayModel, view: ParallelGatewayView },
  { type: 'userTask', model: UserTaskModel, view: UserTaskView },
  { type: 'serviceTask', model: ServiceTaskModel, view: ServiceTaskView },
  { type: 'sequenceFlow', model: SequenceFlowModel, view: SequenceFlowView },
  { type: 'note', model: NoteModel, view: NoteView },
  { type: 'noteFlow', model: NoteFlowModel, view: NoteFlowView },
]

export class BpmnExtend {
  static pluginName = 'bpmnExtend'
  constructor({ lf }: { lf: LogicFlow }) {
    lf.batchRegister(plugins)
    lf.setDefaultEdgeType('sequenceFlow')
  }
}
