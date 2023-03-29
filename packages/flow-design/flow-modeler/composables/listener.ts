import type { ModelerState } from "../types";

import { nextTick } from "vue";

import { defaultGroup } from "../../options";

export function useModelerListener({
  lf,
  graphData,
  elementData,
  formData,
  formLoading,
  formOption,
  formOptions,
  editorVisible
}: ModelerState) {
  async function selectElement({ data, isForce } = { data: undefined as any, isForce: false }) {
    const processNode = lf.value?.graphModel.nodes.find(node => node.type === "process");
    if (!data && processNode?.id) {
      // elementData!.value = undefined;
      // formOption.value.group = [];
      // formData.value = {};
      // return;
      data = lf.value?.getNodeDataById(processNode.id);
    }
    if (data?.id === elementData.value?.id && !isForce) return;
    // lf.value?.selectElementById(data.id);
    formLoading.value = true;
    elementData.value = data;
    formOption.value.group = formOptions.value?.[data.type] ?? defaultGroup;
    formData.value = { ...data.properties, id: data.id, name: data.text?.value || "" };
    await nextTick();
    formLoading.value = false;
  }
  lf.value?.on("element:click", selectElement);
  lf.value?.on("blank:click", selectElement);
  lf.value?.on("node:add", selectElement);
  lf.value?.on("node:delete", () => selectElement());
  lf.value?.on("history:change", () => {
    graphData.value = lf.value?.getGraphData();
  });
  lf.value?.on("custom:edit-click", () => {
    editorVisible.value = true;
  });
}
