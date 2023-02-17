import type { NodeConfig, EdgeConfig, GraphConfigData, LogicFlow, TextConfig, Point } from "@logicflow/core";

export interface FlowElement {
  incoming: string[];
  outgoing: string[];
  dockers: string[];
  children?: string[];
  type: string;
  properties: Record<string, unknown>;
  key: string;
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
    startPoint?: Point;
    endPoint?: Point;
    pointsList?: Point[];
  };
}

export interface TurboData {
  flowElementList: FlowElement[];
  [x: string]: any;
}

// 将LogicFlow中的Node数据转换为Turbo元素数据
function convertNodeToTurboElement(node: NodeConfig & { children?: string[] }): FlowElement {
  const { id, type, x, y, properties, children } = node;
  const text = node.text as TextConfig;
  return {
    incoming: [],
    outgoing: [],
    dockers: [],
    children,
    type,
    properties: {
      ...properties,
      name: text?.value ?? "",
      x,
      y,
      text
    },
    key: id!
  };
}

// 将LogicFlow中的Edge数据转换为Turbo元素数据
function convertEdgeToTurboElement(edge: EdgeConfig) {
  const { id, type, sourceNodeId, targetNodeId, startPoint, endPoint, pointsList, properties } = edge;
  const text = edge.text as TextConfig;
  return {
    incoming: [sourceNodeId],
    outgoing: [targetNodeId],
    type,
    dockers: [],
    properties: {
      ...properties,
      name: text?.value,
      text,
      startPoint,
      endPoint,
      pointsList
    },
    key: id
  };
}

// 将LogicFlow中数据转换为Turbo数据
export function toTurboData(data: GraphConfigData) {
  const nodeMap = new Map();
  const turboData: TurboData = {
    flowElementList: []
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
    turboData.flowElementList.push(flowElement as FlowElement);
  });
  return turboData;
}

// 将Turbo元素数据转换为LogicFlow中的Edge数据
function convertFlowElementToEdge(element: FlowEdge) {
  const { incoming, outgoing, properties, key, type } = element;
  const { text, name, startPoint, endPoint, pointsList } = properties;
  const edge: EdgeConfig = {
    id: key,
    type,
    sourceNodeId: incoming[0],
    targetNodeId: outgoing[0],
    text: text || name,
    properties: {},
    startPoint,
    endPoint,
    pointsList
  };
  // 这种转换方式，在自定义属性中不能与excludeProperties中的属性重名，否则将在转换过程中丢失
  const excludeProperties = ["startPoint", "endPoint", "pointsList", "text"];
  Object.keys(element.properties).forEach(property => {
    if (!excludeProperties.includes(property)) {
      edge.properties![property] = element.properties[property];
    }
  });
  return edge;
}

// 将Turbo元素数据转换为LogicFlow中的Node数据
function convertFlowElementToNode(element: FlowNode) {
  const { properties, key, type /** bounds */, children } = element;
  const { x, y } = properties;
  const { text } = properties;
  // if (x === undefined) {
  //   const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = bounds;
  //   x = (x1 + x2) / 2;
  //   y = (y1 + y2) / 2;
  // }
  const node: NodeConfig & { children?: string[] } = {
    id: key,
    type,
    x: x!,
    y: y!,
    text,
    children,
    properties: {}
  };
  // 这种转换方式，在自定义属性中不能与excludeProperties中的属性重名，否则将在转换过程中丢失
  const excludeProperties = ["x", "y", "text"];
  Object.keys(element.properties).forEach(property => {
    if (!excludeProperties.includes(property)) {
      node.properties![property] = element.properties[property];
    }
  });
  return node;
}

// 将Turbo元素数据转换为LogicFlow数据
export function toLogicflowData(data: TurboData) {
  const { flowElementList } = data;
  const nodes = flowElementList.filter(e => e.type !== "sequenceFlow").map(convertFlowElementToNode);
  const edges = flowElementList.filter(e => e.type === "sequenceFlow").map(convertFlowElementToEdge);
  const lfData: GraphConfigData = {
    nodes,
    edges
  };
  return lfData;
}

export class TurboAdapter {
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
