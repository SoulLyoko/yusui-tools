<script setup lang="ts">
import { useCrud } from '@yusui/uvue'
import { computed, watch } from 'vue'

import { formOption } from './option'

const {
  bindForm,
  crudStateRefs: { formData, defaults },
  getFormData,
} = useCrud({
  formOption,
})
console.log('🚀 ~ bindForm:', bindForm)

onLoad((query) => {
  getFormData(query)
})

const formConsole = computed(() => {
  return JSON.stringify(formData.value)
})

const permission = computed(() => ({
  tabs: formData.value.isTabs,
}))

watch(
  () => formData.value.radio,
  (val) => {
    defaults.value.datetime.type = val
    defaults.value.datetime.label = val
  },
)
watch(
  () => formData.value.switch,
  (val) => {
    defaults.value.input.display = val !== '2'
  },
)

function onSubmit(form: any, loading: () => void) {
  console.log('🚀 ~ onSubmit ~ form', form)
  loading()
  uni.showToast({
    title: JSON.stringify(form),
    icon: 'none',
    duration: 2000,
  })
}
</script>

<template>
  <view>{{ formConsole }}</view>
  <uvue-form v-bind="bindForm" :permission="permission" @submit="onSubmit">
    <template #slot>
      <view>slot</view>
    </template>
    <template #slot-right>
      <view>slot-right</view>
    </template>
    <template #dynamic3>
      <view>dynamicSlot</view>
    </template>
    <template #dynamic3-right>
      <view>dynamicSlotRight</view>
    </template>
  </uvue-form>
</template>

<style lang="scss" scoped></style>

<route lang="yaml">
style:
  navigationBarTitleText: form
</route>
