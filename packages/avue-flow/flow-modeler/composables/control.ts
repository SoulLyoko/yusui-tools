import type { ModelerState } from "../types";

export function useControl({ lf, editorVisible }: ModelerState) {
  lf.value?.extension.control.addItem({
    key: "editor",
    iconClass: "lf-control-editor",
    title: "编辑",
    text: "编辑",
    onClick: () => (editorVisible.value = true)
  });
  lf.value?.extension.control.addItem({
    key: "mini-map",
    iconClass: "lf-control-mini-map",
    title: "导航",
    text: "导航",
    onClick: () => {
      const { __isShow, show, hide } = lf.value?.extension?.miniMap ?? {};
      __isShow ? hide() : show();
    }
  });
}
