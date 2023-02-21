import type { NodeConfig, EdgeConfig } from "@logicflow/core";
import type { ModelerState } from "../types";

export function useMenu({ lf }: ModelerState) {
  lf.value?.extension.menu.addMenuConfig({
    nodeMenu: [
      {
        text: "删除文本",
        icon: true,
        callback(element: NodeConfig) {
          const id = element.id;
          id && lf.value?.updateText(id, "");
        }
      }
    ],
    edgeMenu: [
      {
        text: "删除文本",
        callback(element: EdgeConfig) {
          const id = element.id;
          id && lf.value?.updateText(id, "");
        }
      }
    ],
    graphMenu: [
      {
        text: "框选",
        icon: true,
        className: "lf-menu-select",
        callback() {
          lf.value?.openSelectionSelect();
          lf.value && (lf.value.container.style.cursor = "crosshair");
          lf.value?.once("selection:selected", () => {
            lf.value?.closeSelectionSelect();
            lf.value && (lf.value.container.style.cursor = "");
          });
        }
      },
      {
        text: "清空",
        icon: true,
        className: "lf-menu-clear",
        callback() {
          lf.value?.clearData();
        }
      }
    ]
  });
}
