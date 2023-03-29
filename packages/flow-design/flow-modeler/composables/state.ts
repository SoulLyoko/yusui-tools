import type { AvueFormOption } from "@smallwei/avue";
import type { ModelerProps } from "../types";

import { ref, inject, provide } from "vue";
import { useVModels } from "@vueuse/core";

export const injectionKey = Symbol("modelerState");

export function useProvideModelerState(props: ModelerProps) {
  const vModels = useVModels(props, undefined, { passive: true });
  const { lf, modelValue: graphData, elementData, formData, formOptions } = vModels as Required<typeof vModels>;
  const formLoading = ref(false);
  const formOption = ref<AvueFormOption>({ menuBtn: false, span: 24, labelPosition: "left", group: [] });
  const editorVisible = ref(false);

  function onUpdateFormData(val: any) {
    const id = elementData.value?.id;
    id && lf.value?.setProperties(id, val);
    id && lf.value?.updateText(id, val.name);
  }

  const state = {
    lf,
    graphData,
    elementData,
    formData,
    formLoading,
    formOption,
    formOptions,
    editorVisible,
    onUpdateFormData
  };

  provide(injectionKey, state);

  return state;
}

export function useInjectModelerState() {
  return inject<ReturnType<typeof useProvideModelerState>>(injectionKey)!;
}
