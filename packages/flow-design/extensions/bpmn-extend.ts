import type { NodeConfig, GraphModel } from "@logicflow/core";

import { LogicFlow, h, PolygonNodeModel, PolygonNode } from "@logicflow/core";
import { getBpmnId } from "@logicflow/extension/es/bpmn/getBpmnId";
import {
  RectResize,
  GroupNode,
  Group as _Group,
  StartEventModel as _StartEventModel,
  StartEventView as _StartEventView,
  EndEventView as _EndEventView,
  EndEventModel as _EndEventModel,
  ExclusiveGatewayView as _ExclusiveGatewayView,
  ExclusiveGatewayModel as _ExclusiveGatewayModel,
  UserTaskView as _UserTaskView,
  UserTaskModel as _UserTaskModel,
  ServiceTaskView as _ServiceTaskView,
  ServiceTaskModel as _ServiceTaskModel,
  SequenceFlowView as _SequenceFlowView,
  SequenceFlowModel as _SequenceFlowModel
} from "@logicflow/extension";

/** startEvent */
export class StartEventModel extends _StartEventModel {}
export class StartEventView extends _StartEventView {}
/** endEvent */
export class EndEventModel extends _EndEventModel {}
export class EndEventView extends _EndEventView {
  getShape() {
    const model = this.props.model;
    const style = model.getNodeStyle();
    const { x, y, r } = model;
    return h("circle", { ...style, cx: x, cy: y, r: r, strokeWidth: 5 });
  }
}
/** exclusiveGateway */
export class ExclusiveGatewayModel extends _ExclusiveGatewayModel {
  constructor(data: NodeConfig, graphModel: GraphModel) {
    const { id, text, x, y } = data;
    data.id = id || `Gateway_${getBpmnId()}`;
    data.text = text || { value: text || "", x, y: y + 40 };
    super(data, graphModel);
    this.points = [
      [25, 0],
      [50, 25],
      [25, 50],
      [0, 25]
    ];
  }
}
export class ExclusiveGatewayView extends _ExclusiveGatewayView {
  getShape() {
    const { model } = this.props;
    const { x, y, width, height, points } = model;
    const style = model.getNodeStyle();
    return h(
      "g",
      { transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})` },
      h("polygon", { ...style, x, y, points }),
      h("line", { ...style, x1: 15, y1: 15, x2: 35, y2: 35 }),
      h("line", { ...style, x1: 35, y1: 15, x2: 15, y2: 35 })
    );
  }
}
/** parallelGateway */
export class ParallelGatewayModel extends PolygonNodeModel {
  constructor(data: NodeConfig, graphModel: GraphModel) {
    const { id, text, x, y } = data;
    data.id = id || `Gateway_${getBpmnId()}`;
    data.text = text || { value: text || "", x, y: y + 40 };
    super(data, graphModel);
    this.points = [
      [25, 0],
      [50, 25],
      [25, 50],
      [0, 25]
    ];
  }
}
export class ParallelGatewayView extends PolygonNode {
  getShape() {
    const { model } = this.props;
    const { x, y, width, height, points } = model;
    const style = model.getNodeStyle();
    return h(
      "g",
      { transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})` },
      h("polygon", { ...style, x, y, points }),
      h("line", { ...style, x1: 10, y1: 25, x2: 40, y2: 25 }),
      h("line", { ...style, x1: 25, y1: 10, x2: 25, y2: 40 })
    );
  }
}
/** userTask */
export class UserTaskModel extends _UserTaskModel {}
export class UserTaskView extends _UserTaskView {}
/** serviceTask */
export class ServiceTaskModel extends _ServiceTaskModel {
  isAllowConnectedAsSource() {
    return false;
  }
}
export class ServiceTaskView extends _ServiceTaskView {}
/** sequenceFlow */
export class SequenceFlowModel extends _SequenceFlowModel {}
export class SequenceFlowView extends _SequenceFlowView {}
/** note */
const RectResizeModel = RectResize["model"] as any;
export class NoteModel extends RectResizeModel {
  createId() {
    return "Note_" + getBpmnId();
  }
  initNodeData(data: any) {
    super.initNodeData(data);
    this.height = 40;
    this.text.draggable = false;
  }
  isAllowConnectedAsSource() {
    return false;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.strokeDasharray = "3 3";
    style.fill = "transparent";
    return style;
  }
}
export class NoteView extends RectResize["view"] {}
/** noteFlow */
export class NoteFlowModel extends _SequenceFlowModel {
  getEdgeStyle() {
    const style = super.getEdgeStyle();
    style.strokeDasharray = "3 3";
    return style;
  }
}
export class NoteFlowView extends _SequenceFlowView {}
/** group */
const GroupNodeModel = GroupNode["model"] as any;
export class GroupModel extends GroupNodeModel {
  createId() {
    return "Group_" + getBpmnId();
  }
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.resizable = true;
    this.foldable = true;
    // this.text.editable = true;
  }
  addChild(id: string) {
    super.addChild(id);
    this.graphModel.nodesMap[id]?.model?.setProperty("groupKey", this.id);
  }
  removeChild(id: string) {
    super.removeChild(id);
    this.graphModel.nodesMap[id]?.model?.deleteProperty("groupKey");
  }
}
export class GroupView extends GroupNode["view"] {}
export class Group extends _Group {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf });
    lf.register({ type: "group", model: GroupModel, view: GroupView });
    // 原来的deleteGroupChild函数有bug
    lf.off("node:delete", this.deleteGroupChild);
    lf.on("node:delete", ({ data }) => {
      // 如果删除的是分组节点，则同时删除分组的子节点
      if (data.children) {
        data.children.forEach((nodeId: string) => {
          this.nodeGroupMap.delete(nodeId);
          this.lf.deleteNode(nodeId);
        });
      }
    });
  }
}

const plugins = [
  { type: "startEvent", model: StartEventModel, view: StartEventView },
  { type: "endEvent", model: EndEventModel, view: EndEventView },
  { type: "exclusiveGateway", model: ExclusiveGatewayModel, view: ExclusiveGatewayView },
  { type: "parallelGateway", model: ParallelGatewayModel, view: ParallelGatewayView },
  { type: "userTask", model: UserTaskModel, view: UserTaskView },
  { type: "serviceTask", model: ServiceTaskModel, view: ServiceTaskView },
  { type: "sequenceFlow", model: SequenceFlowModel, view: SequenceFlowView },
  { type: "note", model: NoteModel, view: NoteView },
  { type: "noteFlow", model: NoteFlowModel, view: NoteFlowView }
];

export class BpmnExtend {
  static pluginName = "bpmnExtend";
  constructor({ lf }: { lf: LogicFlow }) {
    plugins.forEach(plugin => {
      lf.register(plugin);
    });
    lf.setDefaultEdgeType("sequenceFlow");
  }
}
