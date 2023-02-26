<template>
  <avue-tree
    ref="treeRef"
    v-model="formData"
    :data="treeData"
    :option="treeOption"
    :beforeOpen="beforeOpen"
    @save="onSave"
    @update="onUpdate"
    @del="onDel"
  ></avue-tree>
</template>

<script setup lang="ts">
import type { AvueTreeProps } from "@smallwei/avue";

import { ref } from "vue";
import { useVModels } from "@vueuse/core";

import { getRandomId } from "../../utils";

const props = defineProps<{ modelValue?: any[] }>();
const vModels = useVModels(props);
const { modelValue: treeData } = vModels as Required<typeof vModels>;

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

const formData = ref<any>({});
async function beforeOpen(done: () => void, type: string) {
  done();
  setTimeout(() => {
    if (type === "add" || type === "parentAdd") {
      formData.value.id = getRandomId();
    }
  }, 100);
}

const treeRef = ref();
const onSave: AvueTreeProps["onSave"] = async (node, data, done) => {
  done();
};
const onUpdate: AvueTreeProps["onUpdate"] = async (node, data, done) => {
  done();
};
const onDel: AvueTreeProps["onDel"] = async (data, done) => {
  done();
};
</script>

<style lang="scss" scoped></style>
