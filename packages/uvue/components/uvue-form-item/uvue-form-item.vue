<script setup lang="ts">
import { useAttrs } from 'vue'

import { dateTypes, dicTypes, inputTypes } from '../../constants'

const emit = defineEmits(['update:modelValue', 'add', 'del'])

const attrs = useAttrs()
const prop = computed(() => attrs.prop as string)
const label = computed(() => attrs.label as string)
const type = computed(() => attrs.type as any)

// #ifdef MP
if (attrs.component) {
  console.error(`[uvue-form]: ${prop.value}: 小程序无法使用自定义组件`)
}
// #endif
</script>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<template>
  <u-form-item class="uvue-form-item" v-bind="$attrs" :label="type === 'dynamic' ? '' : label">
    <view class="uvue-form-item__content">
      <!-- #ifdef MP -->
      <slot v-if="$slots[prop]" :name="prop" />
      <!-- #endif -->

      <!-- #ifndef MP -->
      <slot v-if="$slots[prop]" :name="prop" />
      <!-- #endif -->

      <!-- 自定义组件，不支持小程序 -->
      <!-- #ifndef MP -->
      <component :is="$attrs.component" v-else-if="$attrs.component" v-bind="$attrs" />
      <!-- #endif -->

      <!-- 默认的表单项 -->
      <template v-else>
        <u-input
          v-if="inputTypes.includes(type)" v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <uvue-datetime-picker
          v-if="dateTypes.includes(type)" v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <uvue-dict
          v-if="dicTypes.includes(type)" v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <u-textarea
          v-if="type === 'textarea'" v-bind="$attrs"
          @update:model-value="emit('update:modelValue', $event)"
        />

        <!-- 子表单 -->
        <uvue-dynamic
          v-else-if="type === 'dynamic'" v-bind="$attrs" @add="emit('add', $event)"
          @del="emit('del', $event)" @update:model-value="emit('update:modelValue', $event)"
        >
          <!-- #ifndef MP -->
          <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps" />
          </template>
          <!-- #endif -->
        </uvue-dynamic>
      </template>
    </view>

    <!-- 表单项的右插槽 -->
    <template #right>
      <!-- #ifdef MP -->
      <slot :name="`${prop}-right`" />
      <!-- #endif -->
      <!-- #ifndef MP -->
      <slot :name="`${prop}-right`" v-bind="$attrs" />
      <!-- #endif -->
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
