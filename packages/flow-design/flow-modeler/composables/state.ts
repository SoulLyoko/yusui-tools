import type { ModelerProps } from "../types";

import { ref, inject, provide } from "vue";
import { useVModels } from "@vueuse/core";

export const injectionKey = Symbol("modelerState");

export function useProvideModelerState(props: ModelerProps) {
  const vModels = useVModels(props, undefined, { passive: true });
  const {
    lf,
    modelValue: graphData,
    elementData,
    formData,
    formOption,
    formOptions
  } = vModels as Required<typeof vModels>;
  const formLoading = ref(false);
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
    onUpdateFormData,
    formOptionFormat: props.formOptionFormat ?? (option => option),
    formDataFormat: props.formDataFormat ?? (data => data)
  };

  provide(injectionKey, state);

  return state;
}

export function useInjectModelerState() {
  return inject<ReturnType<typeof useProvideModelerState>>(injectionKey)!;
}
