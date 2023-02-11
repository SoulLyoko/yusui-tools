import { h } from "@logicflow/core";
import { GroupNode, EndEventView, EndEventModel } from "@logicflow/extension";
import { getBpmnId } from "@logicflow/extension/es/bpmn/getBpmnId";

class BpmnGroupModel extends GroupNode["model"] {
  createId() {
    return "Group_" + getBpmnId();
  }
  initNodeData(data: any) {
    super.initNodeData(data);
    this.resizable = true;
    this.foldable = true;
  }
}

class BpmnEndEventView extends EndEventView {
  getShape() {
    const model = this.props.model;
    const style = model.getNodeStyle();
    const { x, y, r } = model;
    return h("circle", { ...style, cx: x, cy: y, r: r, strokeWidth: 5 });
  }
}

export class BpmnExtend {
  static pluginName = "bpmnExtend";
  constructor({ lf }: any) {
    lf.register({
      type: "bpmn:group",
      model: BpmnGroupModel,
      view: GroupNode["view"]
    });
    lf.register({
      type: "bpmn:endEvent",
      model: EndEventModel,
      view: BpmnEndEventView
    });
  }
}
