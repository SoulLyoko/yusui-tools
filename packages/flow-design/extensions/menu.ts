import type { LogicFlow, NodeConfig, EdgeConfig } from "@logicflow/core";
import type { MenuItem } from "@logicflow/extension";

import { Menu as _Menu } from "@logicflow/extension";

export class Menu extends _Menu {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf });

    const copy = {
      text: "复制",
      icon: true,
      className: "lf-menu-copy",
      callback: (ele: NodeConfig) => lf.cloneNode(ele.id!)
    };
    const remove = {
      text: "删除",
      icon: true,
      className: "lf-menu-delete",
      callback: (ele: NodeConfig | EdgeConfig) => {
        lf.deleteNode(ele.id!), lf.deleteEdge(ele.id!);
      }
    };
    const editText = {
      text: "编辑文本",
      icon: true,
      className: "lf-menu-edit",
      callback: (ele: NodeConfig | EdgeConfig) => lf.graphModel.editText(ele.id!)
    };
    const removeText = {
      text: "删除文本",
      icon: true,
      className: "lf-menu-delete",
      callback: (ele: NodeConfig | EdgeConfig) => lf.updateText(ele.id!, "")
    };
    const select = {
      text: "框选",
      icon: true,
      className: "lf-menu-select",
      callback() {
        lf.openSelectionSelect();
        lf.once("selection:selected", lf.closeSelectionSelect);
      }
    };
    const clear = {
      text: "清空",
      icon: true,
      className: "lf-menu-clear",
      callback() {
        lf.clearData();
      }
    };

    const add = {
      text: "添加",
      icon: true,
      className: "lf-menu-add",
      callback: (ele: NodeConfig) => {
        console.log("🚀 ~ file: menu.ts:66 ~ Menu ~ constructor ~ ele:", ele);
        if (["endEvent", "serviceTask", "note"].includes(ele.type)) {
          changeMenuItem(ele, [back]);
        } else {
          changeMenuItem(ele, additionMenuConfig.nodeMenu);
        }
      }
    };
    const back = {
      text: "",
      icon: true,
      className: "lf-menu-back",
      callback: (ele: NodeConfig) => {
        changeMenuItem(ele, defaultMenuConfig.nodeMenu);
      }
    };
    const addUserTask = {
      text: "用户任务",
      icon: true,
      className: "lf-menu-user-task",
      callback: (ele: NodeConfig) => {
        const { x, y } = ele;
        const addedNode = lf.addNode({ type: "userTask", x: x + 200, y });
        lf.addEdge({ sourceNodeId: ele.id!, targetNodeId: addedNode.id });
      }
    };
    const addServiceTask = {
      text: "服务任务",
      icon: true,
      className: "lf-menu-service-task",
      callback: (ele: NodeConfig) => {
        const { x, y } = ele;
        const addedNode = lf.addNode({ type: "serviceTask", x: x + 200, y });
        lf.addEdge({ type: "noteFlow", sourceNodeId: ele.id!, targetNodeId: addedNode.id });
      }
    };
    const addEndEvent = {
      text: "结束",
      icon: true,
      className: "lf-menu-end-event",
      callback: (ele: NodeConfig) => {
        const { x, y } = ele;
        const addedNode = lf.addNode({ type: "endEvent", x: x + 150, y });
        lf.addEdge({ sourceNodeId: ele.id!, targetNodeId: addedNode.id });
      }
    };
    const addExclusiveGateway = {
      text: "互斥网关",
      icon: true,
      className: "lf-menu-exclusive-gateway",
      callback: (ele: NodeConfig) => {
        const { x, y } = ele;
        const addedNode = lf.addNode({ type: "exclusiveGateway", x: x + 150, y });
        lf.addEdge({ sourceNodeId: ele.id!, targetNodeId: addedNode.id });
      }
    };
    const addParallelGateway = {
      text: "并行网关",
      icon: true,
      className: "lf-menu-parallel-gateway",
      callback: (ele: NodeConfig) => {
        const { x, y } = ele;
        const addedNode = lf.addNode({ type: "parallelGateway", x: x + 150, y });
        lf.addEdge({ sourceNodeId: ele.id!, targetNodeId: addedNode.id });
      }
    };
    const addNote = {
      text: "注释",
      icon: true,
      className: "lf-menu-note",
      callback: (ele: NodeConfig) => {
        const { x, y } = ele;
        const addedNode = lf.addNode({ type: "note", x, y: y - 150 });
        lf.addEdge({ type: "noteFlow", sourceNodeId: ele.id!, targetNodeId: addedNode.id });
      }
    };

    const changeMenuItem = (ele: NodeConfig | EdgeConfig, menuList: MenuItem[]) => {
      setTimeout(() => {
        // @ts-ignore
        this.__currentData = ele;
        // @ts-ignore
        const { left, top } = this.__menuDOM.style;
        // @ts-ignore
        this.showMenu(left, top, menuList);
      });
    };

    const defaultMenuConfig = {
      nodeMenu: [add, copy, remove, editText, removeText],
      edgeMenu: [remove, editText, removeText],
      graphMenu: [select, clear]
    };

    const additionMenuConfig = {
      nodeMenu: [back, addUserTask, addServiceTask, addExclusiveGateway, addParallelGateway, addEndEvent, addNote]
    };

    this.setMenuConfig(defaultMenuConfig);
  }
}
