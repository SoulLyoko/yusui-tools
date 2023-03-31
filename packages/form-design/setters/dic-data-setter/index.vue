<template>
  <avue-tree
    v-if="setterType == 'tree'"
    v-model="treeFormData"
    :data="dicData"
    :option="treeOption"
    :beforeOpen="beforeOpen"
    @save="onSave"
    @update="onUpdate"
    @del="onDel"
  ></avue-tree>
  <avue-dynamic
    v-else
    :children="dynamicOption"
    :modelValue="dicData || []"
    @update:modelValue="dicData = $event"
  ></avue-dynamic>
</template>

<script setup lang="ts">
import type { AvueTreeProps } from "@smallwei/avue";

import { ref } from "vue";
import { useVModels } from "@vueuse/core";

import { getRandomId } from "../../utils";

const props = defineProps<{ modelValue?: any[]; setterType?: string }>();
const vModels = useVModels(props);
const { modelValue: dicData } = vModels as Required<typeof vModels>;

// dynamic
const dynamicOption = {
  column: [
    { label: "名称", prop: "label" },
    { label: "值", prop: "value" }
  ]
};

//tree
const treeOption = {
  props: {
    value: "id"
  },
  formOption: {
    column: [
      { label: "名称", prop: "label" },
      { label: "值", prop: "value" }
    ]
  }
};

const treeFormData = ref<any>({});
function beforeOpen(done: () => void, type: string) {
  done();
  setTimeout(() => {
    if (type === "add" || type === "parentAdd") {
      treeFormData.value.id = getRandomId();
    }
  }, 100);
}

const onSave: AvueTreeProps["onSave"] = (node, data, done) => done();
const onUpdate: AvueTreeProps["onUpdate"] = (node, data, done) => done();
const onDel: AvueTreeProps["onDel"] = (data, done) => done();
</script>
