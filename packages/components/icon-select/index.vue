<template>
  <el-popover popper-class="icon-select-popper" placement="right" :width="800" trigger="click" v-bind="$attrs">
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
import { useVModel } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const props = defineProps({
  modelValue: { type: String, default: "" }
});
const modelValue = useVModel(props);
</script>
