<template>
  <el-popover
    popper-class="icon-select-popper"
    placement="right"
    :width="800"
    trigger="click"
    v-bind="$attrs"
    @show="onPopShow"
    @hide="onPopHide"
  >
    <template #reference>
      <el-input
        v-model="modelValue"
        class="icon-select-input"
        placeholder="选择图标"
        style="width: 250px"
        v-bind="$attrs"
      >
        <template #suffix>
          <Icon class="el-input__icon" :icon="modelValue" />
        </template>
      </el-input>
    </template>
    <el-divider>在iconify中查找图标，复制名称到输入框中</el-divider>
    <iframe src="https://icon-sets.iconify.design/" frameborder="0" width="100%" height="600px"></iframe>
  </el-popover>
</template>

<script setup lang="ts">
/**
 * 图标选择组件
 * @prop {String} modelValue v-icon 的icon值
 */
import { onUnmounted } from "vue";
import { useVModel } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const props = defineProps({
  modelValue: { type: String }
});
const modelValue = useVModel(props);

let interval: any;
async function onPopShow() {
  clearInterval(interval);
  await global.navigator.clipboard.writeText("");
  interval = setInterval(async () => {
    const text = await global.navigator.clipboard.readText();
    if (text && modelValue.value !== text) {
      modelValue.value = text;
    }
  });
}
function onPopHide() {
  clearInterval(interval);
}
onUnmounted(() => {
  clearInterval(interval);
});
</script>
