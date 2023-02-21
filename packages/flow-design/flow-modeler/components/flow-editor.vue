<template>
  <el-drawer v-model="visible">
    <template #header>
      <span>编辑JSON</span>
      <el-button type="primary" size="default" @click="confirmUpdateJson">确定</el-button>
    </template>
    <el-input v-model="jsonForEdit" class="flow-editor__textarea" type="textarea"></el-input>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useVModels } from "@vueuse/core";

const props = defineProps<{
  /** 流程图数据 */
  modelValue?: object;
  visible?: boolean;
}>();
const emit = defineEmits(["confirm"]);
const vModels = useVModels(props);
const { modelValue, visible } = vModels as Required<typeof vModels>;

const jsonForEdit = ref("");
function confirmUpdateJson() {
  const data = JSON.parse(jsonForEdit.value);
  modelValue.value = data;
  emit("confirm", data);
  visible.value = false;
}
watchEffect(() => {
  jsonForEdit.value = JSON.stringify(modelValue.value, null, 2);
});
</script>

<style lang="scss">
.flow-editor__textarea {
  height: 100%;
}
.flow-editor__textarea .el-textarea__inner {
  height: 100%;
}
</style>
