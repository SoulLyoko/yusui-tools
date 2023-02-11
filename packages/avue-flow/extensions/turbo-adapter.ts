import type { NodeConfig, EdgeConfig, GraphConfigData, LogicFlow, TextConfig } from "@logicflow/core";

export enum TurboType {
  "bpmn:sequenceFlow" = 1,
  "bpmn:startEvent" = 2,
  "bpmn:endEvent" = 3,
  "bpmn:userTask" = 4,
  "bpmn:serviceTask" = 5,
  "bpmn:exclusiveGateway" = 6
}

export interface FlowElement {
  incoming: string[];
  outgoing: string[];
  dockers: string[];
  type: TurboType | string;
  properties: Record<string, unknown>;
  key?: string;
}

export interface FlowNode extends FlowElement {
  properties: Record<string, unknown> & {
    name?: string;
    text?: TextConfig;
    x?: number;
    y?: number;
  };
}
export interface FlowEdge extends FlowElement {
  properties: Record<string, unknown> & {
    name?: string;
    text?: TextConfig;
    startPoint?: string;
    endPoint?: string;
    pointsList?: string;
  };
}

export interface TurboData {
  flowElementList: FlowElement[];
  [x: string]: any;
}

function getTurboType(type?: TurboType | string) {
  return TurboType[type as any] || type || "";
}

// 将LogicFlow中的Node数据转换为Turbo元素数据
function convertNodeToTurboElement(node: NodeConfig): FlowElement {
  const { id, type, x, y, properties } = node;
  const text = node.text as TextConfig;
  return {
    incoming: [],
    outgoing: [],
    dockers: [],
    type: getTurboType(type),
    properties: {
      ...properties,
      name: text?.value ?? "",
      x,
      y,
      text
    },
    key: id
  };
}

// 将LogicFlow中的Edge数据转换为Turbo元素数据
function convertEdgeToTurboElement(edge: EdgeConfig) {
  const { id, type, sourceNodeId, targetNodeId, startPoint, endPoint, pointsList, properties } = edge;
  const text = edge.text as TextConfig;
  return {
    incoming: [sourceNodeId],
    outgoing: [targetNodeId],
    type: getTurboType(type),
    dockers: [],
    properties: {
      ...properties,
      name: text?.value,
      text,
      startPoint: JSON.stringify(startPoint),
      endPoint: JSON.stringify(endPoint),
      pointsList: JSON.stringify(pointsList)
    },
    key: id
  };
}

// 将LogicFlow中数据转换为Turbo数据
export function toTurboData(data: GraphConfigData) {
  const nodeMap = new Map();
  const turboData: TurboData = {
    flowElementList: [] as any[]
  };
  data.nodes.forEach(node => {
    const flowElement = convertNodeToTurboElement(node);
    turboData.flowElementList.push(flowElement);
    nodeMap.set(node.id, flowElement);
  });
  data.edges.forEach(edge => {
    const flowElement = convertEdgeToTurboElement(edge);
    const sourceElement = nodeMap.get(edge.sourceNodeId);
    sourceElement.outgoing.push(flowElement.key);
    const targetElement = nodeMap.get(edge.targetNodeId);
    targetElement.incoming.push(flowElement.key);
    turboData.flowElementList.push(flowElement);
  });
  return turboData;
}

// 将Turbo元素数据转换为LogicFlow中的Edge数据
function convertFlowElementToEdge(element: FlowEdge) {
  const { incoming, outgoing, properties, key, type } = element;
  const { text, name, startPoint, endPoint, pointsList } = properties;
  const edge: EdgeConfig = {
    id: key,
    type: getTurboType(type) as string,
    sourceNodeId: incoming[0],
    targetNodeId: outgoing[0],
    text: text || name,
    properties: {}
  };
  if (startPoint) {
    edge.startPoint = JSON.parse(startPoint);
  }
  if (endPoint) {
    edge.endPoint = JSON.parse(endPoint);
  }
  if (pointsList) {
    edge.pointsList = JSON.parse(pointsList);
  }
  // 这种转换方式，在自定义属性中不能与excludeProperties中的属性重名，否则将在转换过程中丢失
  const excludeProperties = ["startPoint", "endPoint", "pointsList", "text"];
  Object.keys(element.properties).forEach(property => {
    if (excludeProperties.indexOf(property) === -1) {
      edge.properties![property] = element.properties[property];
    }
  });
  return edge;
}

// 将Turbo元素数据转换为LogicFlow中的Node数据
function convertFlowElementToNode(element: FlowNode) {
  const { properties, key, type /** bounds */ } = element;
  const { x, y } = properties;
  const { text } = properties;
  // if (x === undefined) {
  //   const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = bounds;
  //   x = (x1 + x2) / 2;
  //   y = (y1 + y2) / 2;
  // }
  const node: NodeConfig = {
    id: key,
    type: getTurboType(type) as string,
    x: x!,
    y: y!,
    text,
    properties: {}
  };
  // 这种转换方式，在自定义属性中不能与excludeProperties中的属性重名，否则将在转换过程中丢失
  const excludeProperties = ["x", "y", "text"];
  Object.keys(element.properties).forEach(property => {
    if (excludeProperties.indexOf(property) === -1) {
      node.properties![property] = element.properties[property];
    }
  });
  return node;
}

// 将Turbo元素数据转换为LogicFlow数据
export function toLogicflowData(data: TurboData) {
  const lfData: GraphConfigData = {
    nodes: [],
    edges: []
  };
  const list = data.flowElementList;
  list &&
    list.length > 0 &&
    list.forEach(element => {
      if (element.type === TurboType["bpmn:sequenceFlow"]) {
        const edge = convertFlowElementToEdge(element);
        lfData.edges.push(edge);
      } else {
        const node = convertFlowElementToNode(element);
        lfData.nodes.push(node);
      }
    });
  return lfData;
}

class TurboAdapter {
  static pluginName = "turboAdapter";
  constructor({ lf }: { lf: LogicFlow }) {
    lf.adapterIn = this.adapterIn;
    lf.adapterOut = this.adapterOut;
  }
  adapterOut(logicflowData: GraphConfigData) {
    return toTurboData(logicflowData);
  }
  adapterIn(turboData: unknown) {
    return toLogicflowData(turboData as TurboData);
  }
}

export { TurboAdapter };
