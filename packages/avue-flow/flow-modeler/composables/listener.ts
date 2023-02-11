import type { ModelerState } from "../types";

import { nextTick } from "vue";

import { defaultGroup } from "../options";

export function useModelerListener({
  lf,
  graphData,
  elementData,
  formData,
  formLoading,
  formOption,
  formOptions
}: ModelerState) {
  lf.value?.on("element:click", async ({ data }) => {
    formLoading.value = true;
    elementData!.value = data;
    formOption.value.group = formOptions?.value![data.type] ?? defaultGroup;
    formData.value = { ...data.properties, id: data.id, name: data.text?.value || "" };
    await nextTick();
    formLoading.value = false;
  });
  lf.value?.on("blank:click", () => {
    elementData!.value = undefined;
    formOption.value.group = [];
    formData.value = {};
  });
  lf.value?.on("history:change", () => {
    graphData.value = lf.value?.getGraphData();
  });
}
