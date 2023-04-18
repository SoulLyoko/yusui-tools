import type { MaybeRef } from "@vueuse/core";
import type { AvueFormDefaults } from "@smallwei/avue";
import type { FlowDetail } from "../../api/flow-task";

import { ref, watchEffect, nextTick, isRef } from "vue";

export function useFormDefaults(flowDetailRef: MaybeRef<FlowDetail>) {
  const defaults = ref<AvueFormDefaults>({});
  watchEffect(async () => {
    const flowDetail = isRef(flowDetailRef) ? flowDetailRef.value : flowDetailRef;
    const { formProperty } = flowDetail?.properties || {};
    if (!formProperty?.length) return;
    await nextTick();
    Object.keys(defaults.value).forEach(prop => {
      const label = defaults.value[prop]?.label || "";
      const find = formProperty?.find(e => e.prop === prop);
      defaults.value[prop].display = find?.display;
      defaults.value[prop].disabled = find?.disabled;
      defaults.value[prop].detail = find?.detail;
      defaults.value[prop].readonly = find?.readonly;
      defaults.value[prop].rules = defaults.value[prop].rules ?? [];
      if (find?.required && defaults.value[prop].rules?.some(e => e.required)) return;
      if (find?.required) {
        defaults.value[prop].rules?.push({ required: true, message: `${label}为必填项` });
      } else {
        defaults.value[prop].rules = defaults.value[prop].rules?.filter(e => !e.required);
      }
    });
  });

  return defaults;
}
