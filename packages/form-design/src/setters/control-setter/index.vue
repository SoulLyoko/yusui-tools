<template>
  <el-button @click="visible = true">编辑代码</el-button>
  <el-dialog v-model="visible" title="控制字段属性">
    <avue-dynamic v-model="controlData.controlParams" :children="dynamicOption"></avue-dynamic>
    代码：
    <MonacoEditor v-model="modelValue" valueType="function" height="200px"></MonacoEditor>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useVModels } from "@vueuse/core";
import { parse } from "acorn";
import { generate } from "astring";
import { get } from "lodash-unified";

import { useInjectState } from "../../composables";
import MonacoEditor from "../monaco-editor/index.vue";
import PropertySelect from "./property-select.vue";

interface ControlParams {
  field?: string;
  property?: string;
  value?: string;
}

const props = defineProps<{ modelValue?: string }>();
const vModels = useVModels(props);
const { modelValue } = vModels as Required<typeof vModels>;
const { resourceElementList, getResource } = useInjectState();

const visible = ref(false);
const controlData = ref({ controlParams: [] as ControlParams[] });
watch(
  modelValue,
  () => {
    if (!modelValue.value) {
      controlData.value.controlParams = [];
      return;
    }
    try {
      const ast = parse(modelValue.value, { ecmaVersion: "latest" }) as any;
      const returnObject = ast.body[0]?.expression?.body?.properties ?? [];
      if (returnObject?.length) {
        controlData.value.controlParams = returnObject
          .map((p: any) => {
            return p.value.properties.map((p2: any) => {
              const value = generate(p2.value);
              return { field: p.key.name, property: p2.key.name, value };
            });
          })
          .flat();
      }
    } catch {}
  },
  { immediate: true }
);
watch(
  controlData,
  () => {
    if (!visible.value) return;
    const fieldSet = [...new Set(controlData.value.controlParams?.map(e => e.field))];
    const fn = `(val, form) => ({
  ${fieldSet
    .map(field => {
      const result = controlData.value.controlParams?.filter(e => e.field === field);
      return `${field}: { ${result?.map(f => `${f.property}: ${f.value}`).join(", ")} }`;
    })
    .join(",\n  ")}
})`;
    modelValue.value = fn;
  },
  { deep: true }
);

const allElementList = computed(() => {
  return resourceElementList.value
    .map(element => {
      const container = getResource(element.name)?.container;
      if (container) {
        return get(element, container, []);
      }
      return [element];
    })
    .flat();
});

const dynamicOption = computed(() => {
  return {
    column: [
      {
        label: "受控字段",
        prop: "field",
        type: "select",
        dicData: allElementList.value.map(e => ({ label: e.label, value: e.prop, desc: e.prop }))
      },
      {
        label: "受控属性",
        prop: "property",
        component: PropertySelect
      },
      {
        label: "表达式/值",
        prop: "value",
        component: MonacoEditor,
        tooltip: true
      }
    ]
  };
});
</script>
