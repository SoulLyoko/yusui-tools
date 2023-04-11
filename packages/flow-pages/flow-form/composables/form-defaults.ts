import type { MaybeRef } from "@vueuse/core";
import type { FlowDetail } from "../../api/flow-task";
import type { AvueFormColumn } from "@smallwei/avue";

import { ref, watchEffect, nextTick, isRef } from "vue";

// import { sleep } from "@/utils";

export function useFormDefaults(flowDetail: MaybeRef<FlowDetail>) {
  const defaults = ref<Record<string, AvueFormColumn>>({});
  watchEffect(async () => {
    const detail = isRef(flowDetail) ? flowDetail.value : flowDetail;
    const { formProperty } = detail?.properties || {};
    if (!formProperty?.length) return;
    await nextTick();
    // await sleep();
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
