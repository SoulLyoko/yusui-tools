import type { LogicFlow, NodeConfig, EdgeConfig } from "@logicflow/core";

import { Menu as _Menu } from "@logicflow/extension";

export class Menu extends _Menu {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf });
    this.setMenuConfig({
      nodeMenu: [
        {
          text: "删除文本",
          icon: true,
          callback(element: NodeConfig) {
            const id = element.id;
            id && lf.updateText(id, "");
          }
        }
      ],
      edgeMenu: [
        {
          text: "删除文本",
          callback(element: EdgeConfig) {
            const id = element.id;
            id && lf.updateText(id, "");
          }
        }
      ],
      graphMenu: [
        {
          text: "框选",
          icon: true,
          className: "lf-menu-select",
          callback() {
            lf.openSelectionSelect();
            lf.once("selection:selected", lf.closeSelectionSelect);
          }
        },
        {
          text: "清空",
          icon: true,
          className: "lf-menu-clear",
          callback() {
            lf.clearData();
          }
        }
      ]
    });
  }
}
