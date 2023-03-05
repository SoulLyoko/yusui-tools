import type { AvueFormOption } from "@smallwei/avue";
import type { Resource, ResourceElement, History, Props } from "../types";

import { ref, computed, provide, inject, watch, nextTick } from "vue";
import { useVModels } from "@vueuse/core";
import { cloneDeep, omit, isEqual } from "lodash-unified";

import defaultResources from "../resources";
import { transformResouceToFormOption, transformFormOptionToResouce } from "../utils";

const injectKey = Symbol("form-design-state");

export function useProvideState(props: Props) {
  const vModels = useVModels(props);
  const { modelValue } = vModels as Required<typeof vModels>;

  const formOption = ref<AvueFormOption>({});

  const resources = computed(() => props.resources || defaultResources);
  const resourcesMap = computed<Record<string, Resource>>(() =>
    Object.fromEntries(resources.value.map(item => [item.name, item]))
  );

  const resourceElementList = ref<ResourceElement[]>([]);
  const activeElement = ref<ResourceElement>({});
  const hoverElement = ref<ResourceElement>({});

  const initialHistory = { type: "init", timestamp: Date.now(), active: {}, option: modelValue.value || {} };
  const historyList = ref<History[]>([initialHistory]);
  const historyIndex = ref(0);

  const workType = ref("design");
  const deviceType = ref("pc");

  watch(
    modelValue,
    val => {
      if (!isEqual(formOption.value, omit(val, ["group", "column"]))) {
        formOption.value = omit(val, ["group", "column"]);
      }
      if (!isEqual(resourceElementList.value, transformFormOptionToResouce(val || {}))) {
        resourceElementList.value = transformFormOptionToResouce(val || {});
      }
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

  function getResource(name?: string) {
    if (name) {
      return resourcesMap.value[name];
    } else {
      return;
    }
  }

  async function recordHistory(type: string) {
    // resourceElementList.value.sort((a, b) => (b.type === "group" ? -1 : 1));
    await nextTick();
    historyList.value.push({
      type: type,
      timestamp: Date.now(),
      active: cloneDeep(activeElement.value),
      option: cloneDeep(modelValue.value || {})
    });
    historyIndex.value = historyList.value.length - 1;
  }
  function restoreHistory(index: number) {
    const find = historyList.value.find((e, i) => i === index);
    if (!find) return;
    modelValue.value = cloneDeep(find.option);
    activeElement.value = cloneDeep(find.active);
    historyIndex.value = index;
  }
  function resetHistory() {
    resourceElementList.value = [];
    activeElement.value = {};
    historyIndex.value = 0;
    historyList.value = [initialHistory];
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
    resetHistory,
    getResource
  };

  provide(injectKey, state);

  return state;
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectKey)!;
}
