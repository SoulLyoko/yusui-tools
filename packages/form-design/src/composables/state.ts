import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement, History, Resource, Props } from "../types";

import { ref, computed, provide, inject, watch, nextTick } from "vue";
import { useVModels } from "@vueuse/core";
import { cloneDeep, omit } from "lodash-unified";

import defaultResources from "../resources";
import { transformResouceToFormOption, transformFormOptionToResouce } from "../utils";

const injectKey = Symbol("form-design-state");

export function useProvideState(props: Props) {
  const vModels = useVModels(props);
  const { modelValue } = vModels as Required<typeof vModels>;

  const resources = computed<Resource[]>(() => [...defaultResources, ...(props.resources || [])]);
  const resourcesMap = computed(() => Object.fromEntries(resources.value.map(item => [item.name, item])));
  const resourceElementList = ref<ResourceElement[]>([]);
  const activeElement = ref<ResourceElement>({});
  const hoverElement = ref<ResourceElement>({});
  const formOption = ref<AvueFormOption>({});
  const historyList = ref<History[]>([{ type: "init", timestamp: Date.now(), active: {}, option: {} }]);
  const historyIndex = ref(-1);
  const workType = ref("design");
  const deviceType = ref("pc");

  watch(
    modelValue,
    val => {
      formOption.value = omit(val, ["group", "column"]);
      resourceElementList.value = transformFormOptionToResouce(val || {});
    },
    { immediate: true, deep: true }
  );
  watch(
    () => [resourceElementList, formOption],
    () => {
      modelValue.value = {
        ...omit(formOption.value, ["group", "column"]),
        ...transformResouceToFormOption(resourceElementList.value)
      };
    },
    { deep: true }
  );

  async function recordHistory(type: string) {
    await nextTick();
    // resourceElementList.value.sort((a, b) => (b.type === "group" ? -1 : 1));
    historyList.value.push({
      type: type,
      timestamp: Date.now(),
      active: activeElement.value,
      option: modelValue.value || {}
      // list: cloneDeep(resourceElementList.value)
    });
    historyIndex.value = historyList.value.length - 1;
  }
  function restoreHistory(index: number) {
    const find = historyList.value.find((item, i) => i === index);
    if (!find) return;
    modelValue.value = cloneDeep(find.option);
    // resourceElementList.value = cloneDeep(find.list);
    activeElement.value = cloneDeep(find.active);
    historyIndex.value = index;
  }
  function resetHistory() {
    resourceElementList.value = [];
    activeElement.value = {};
    historyIndex.value = -1;
    historyList.value = [];
  }

  const state = {
    resources,
    resourcesMap,
    resourceElementList,
    activeElement,
    hoverElement,
    formOption,
    historyList,
    historyIndex,
    workType,
    deviceType,
    modelValue,
    recordHistory,
    restoreHistory,
    resetHistory
  };

  provide(injectKey, state);

  return state;
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectKey)!;
}
