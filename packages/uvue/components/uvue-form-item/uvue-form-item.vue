<script setup lang="ts">
import { useDict } from '@yusui/composables'
import { useAttrs, watch } from 'vue'

defineProps({
  type: { type: String },
  label: { type: String },
  prop: { type: String },
  dynamicProp: { type: String },
})

const emit = defineEmits(['update:dic', 'update:modelValue'])

const inputTypes = ['input', 'text', 'password', 'number'] // 显示input组件的类型
const pickerTypes = ['date', 'time', 'datetime', 'year-month'] // 显示picker组件的类型
const dicTypes = ['select', 'cascader', 'checkbox', 'radio', 'switch'] // 显示picker组件的类型

const dic = useDict(useAttrs())
watch(dic, val => emit('update:dic', val))
</script>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<template>
  <u-form-item
    class="uvue-form-item"
    v-bind="$attrs"
    :label="type === 'dynamic' ? '' : label"
    :prop="dynamicProp || prop"
  >
    <!-- 自定义的表单项 -->
    <view class="uvue-form-item__content">
      <slot v-if="$slots[prop!]" :name="prop" />

      <!-- #ifndef MP -->
      <component :is="$attrs.component" v-else-if="$attrs.component" v-bind="$attrs" :dic="dic" />
      <!-- #endif -->

      <!-- 默认的表单项 -->
      <template v-else>
        <u-input
          v-if="inputTypes.includes(type!)"
          v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <uvue-datetime-picker
          v-if="pickerTypes.includes(type!)"
          v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <uvue-dict
          v-if="dicTypes.includes(type!)"
          v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <u-textarea
          v-if="type === 'textarea'"
          v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />
      </template>
    </view>

    <!-- 表单项的右插槽 -->
    <template #right>
      <slot :name="`${prop}-right`" />
    </template>
  </u-form-item>
</template>

<style lang="scss" scoped>
.uvue-form-item {
  width: 100%;
  &__content {
    width: 100%;
  }
}
</style>
