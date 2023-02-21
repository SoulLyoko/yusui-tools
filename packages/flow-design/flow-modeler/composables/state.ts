import type { AvueFormOption } from "@smallwei/avue";
import type { ModelerProps } from "../types";

import { ref } from "vue";
import { useVModels } from "@vueuse/core";

export function useModelerState(props: ModelerProps) {
  const vModels = useVModels(props, undefined, { passive: true });
  const { lf, modelValue: graphData, elementData, formData, formOptions } = vModels as Required<typeof vModels>;
  const formLoading = ref(false);
  const formOption = ref<AvueFormOption>({ menuBtn: false, span: 24, group: [] });
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

  return state;
}
