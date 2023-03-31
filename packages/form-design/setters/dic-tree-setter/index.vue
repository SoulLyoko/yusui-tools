<template>
  <avue-tree
    v-model="treeFormData"
    :data="dicData"
    :option="treeOption"
    :beforeOpen="beforeOpen"
    @save="onSave"
    @update="onUpdate"
    @del="onDel"
  ></avue-tree>
</template>

<script setup lang="ts">
import type { AvueTreeProps, DicItem } from "@smallwei/avue";

import { ref } from "vue";
import { useVModels } from "@vueuse/core";

import { getRandomId } from "../../utils";

const props = defineProps<{ modelValue?: DicItem[] }>();
const vModels = useVModels(props);
const { modelValue: dicData } = vModels as Required<typeof vModels>;

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
