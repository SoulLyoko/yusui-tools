import type { LogicFlow, NodeConfig, EdgeConfig, GraphModel } from "@logicflow/core";

import { h, PolygonNodeModel, PolygonNode } from "@logicflow/core";
import { getBpmnId } from "@logicflow/extension/es/bpmn/getBpmnId";
import {
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
export class StartEventModel extends _StartEventModel {
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.text.draggable = true;
  }
}
export class StartEventView extends _StartEventView {}
/** endEvent */
export class EndEventModel extends _EndEventModel {
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.text.draggable = true;
  }
}
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
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.text.draggable = true;
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
      h("line", { x1: 15, y1: 15, x2: 35, y2: 35, ...style }),
      h("line", { x1: 35, y1: 15, x2: 15, y2: 35, ...style })
    );
  }
}
/** parallelGateway */
export class ParallelGatewayModel extends PolygonNodeModel {
  static extendKey = "ParallelGatewayModel";
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
  static extendKey = "ParallelGatewayNode";
  getShape() {
    const { model } = this.props;
    const { x, y, width, height, points } = model;
    const style = model.getNodeStyle();
    return h(
      "g",
      { transform: `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})` },
      h("polygon", { ...style, x, y, points }),
      h("line", { x1: 10, y1: 25, x2: 40, y2: 25, ...style }),
      h("line", { x1: 25, y1: 10, x2: 25, y2: 40, ...style })
    );
  }
}
/** userTask */
export class UserTaskModel extends _UserTaskModel {
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.text.draggable = true;
  }
}
export class UserTaskView extends _UserTaskView {}
/** serviceTask */
export class ServiceTaskModel extends _ServiceTaskModel {
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.text.draggable = true;
  }
}
export class ServiceTaskView extends _ServiceTaskView {}
/** sequenceFlow */
export class SequenceFlowModel extends _SequenceFlowModel {
  initEdgeData(data: EdgeConfig) {
    super.initEdgeData(data);
    this.text.draggable = true;
  }
}
export class SequenceFlowView extends _SequenceFlowView {}
/** group */
export class GroupModel extends GroupNode["model"] {
  createId() {
    return "Group_" + getBpmnId();
  }
  initNodeData(data: NodeConfig) {
    super.initNodeData(data);
    this.resizable = true;
    this.foldable = true;
    this.text.editable = true;
    this.text.draggable = true;
  }
}
export class GroupView extends GroupNode["view"] {}

const plugins = [
  { type: "startEvent", model: StartEventModel, view: StartEventView },
  { type: "endEvent", model: EndEventModel, view: EndEventView },
  { type: "exclusiveGateway", model: ExclusiveGatewayModel, view: ExclusiveGatewayView },
  { type: "parallelGateway", model: ParallelGatewayModel, view: ParallelGatewayView },
  { type: "userTask", model: UserTaskModel, view: UserTaskView },
  { type: "serviceTask", model: ServiceTaskModel, view: ServiceTaskView },
  { type: "sequenceFlow", model: SequenceFlowModel, view: SequenceFlowView }
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

export class Group extends _Group {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf });
    lf.register({ type: "group", model: GroupModel, view: GroupView });
  }
}
