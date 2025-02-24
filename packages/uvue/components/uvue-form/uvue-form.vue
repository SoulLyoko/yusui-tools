<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref, useSlots, watch } from 'vue'

import { useCollapse, useMethods, useOption, useRules } from './composables'
import { formEmits, formProps } from './constants'

const props = defineProps(formProps)
const emit = defineEmits(formEmits)

const vModel = useVModel(props, 'modelValue', emit, { deep: true })
const { option, defaults, currentTab, defaultValues } = useOption(props, emit)
watch(defaultValues, () => {
  vModel.value = Object.assign(vModel.value, { ...defaultValues.value, ...vModel.value })
})

const formRef = ref()
const rules = useRules(option, defaults, vModel, formRef)
const methods = useMethods(formRef)
const { validate, resetFields } = methods
defineExpose(methods)

const submitLoading = ref(false)
async function onSubmit() {
  await validate()
  submitLoading.value = true
  const loading = () => (submitLoading.value = false)
  emit('submit', props.modelValue, loading)
}
function onDel() {
  submitLoading.value = true
  const loading = () => (submitLoading.value = false)
  emit('del', props.modelValue, loading)
}
const { collapseRef, collapsed, initCollapse, onCollapseChange } = useCollapse(option)

const slots = useSlots()
function getSlot(name: string) {
  return slots[name] ? name : ''
}
function getSlotRight(name: string) {
  return slots[`${name}-right`] ? `${name}-right` : ''
}
</script>

<template>
  <view class="uvue-form" :class="`uvue-form--${formType}`">
    <u-form ref="formRef" v-bind="option" :model="{ $model: '', ...vModel }" :rules="rules">
      <!-- 渲染表单项 -->
      <uvue-form-item
        v-for="(columnItem, columnIndex) in option.column?.filter(e => e.display)"
        :key="columnItem.prop || columnIndex" v-bind="columnItem" v-model="vModel[columnItem.prop!]"
      >
        <!-- #ifdef MP -->
        <template #[getSlot(columnItem.prop!)]>
          <slot :name="getSlot(columnItem.prop!)" />
        </template>
        <template #[getSlotRight(columnItem.prop!)]>
          <slot :name="getSlotRight(columnItem.prop!)" />
        </template>
        <!-- #endif -->
        <!-- #ifndef MP -->
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
          <slot :name="slotName" :row="vModel" :column="columnItem" v-bind="slotProps" />
        </template>
        <!-- #endif -->
      </uvue-form-item>

      <!-- 渲染分组表单项 isTabs -->
      <template v-if="option.group?.length && option.tabs">
        <u-tabs :list="option.group" :current="currentTab" key-name="label" @change="currentTab = $event.index" />
        <!-- 自定义分组表单项 isTabs -->
        <template
          v-for="(groupItem, groupIndex) in option.group?.filter(e => e.display)"
          :key="groupItem.prop || groupIndex"
        >
          <uvue-form-item
            v-for="(columnItem, columnIndex) in groupItem.column?.filter(e => e.display)"
            :key="columnItem.prop || columnIndex" v-bind="columnItem" v-model="vModel[columnItem.prop!]"
            :style="groupIndex === currentTab ? '' : 'display:none'"
          >
            <!-- #ifdef MP -->
            <template #[getSlot(columnItem.prop!)]>
              <slot :name="getSlot(columnItem.prop!)" />
            </template>
            <template #[getSlotRight(columnItem.prop!)]>
              <slot :name="getSlotRight(columnItem.prop!)" />
            </template>
            <!-- #endif -->
            <!-- #ifndef MP -->
            <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
              <slot :name="slotName" :row="vModel" :column="columnItem" v-bind="slotProps" />
            </template>
            <!-- #endif -->
          </uvue-form-item>
        </template>
      </template>

      <!-- 渲染分组表单项 -->
      <u-collapse
        v-if="option.group?.length && !option.tabs" ref="collapseRef" :value="collapsed"
        @change="onCollapseChange"
      >
        <template
          v-for="(groupItem, groupIndex) in option.group?.filter(e => e.display)"
          :key="groupItem.prop || groupIndex"
        >
          <u-collapse-item
            :title="groupItem.label" :name="groupItem.prop" :is-link="groupItem.arrow" v-bind="groupItem"
            label=""
          >
            <uvue-form-item
              v-for="(columnItem, columnIndex) in groupItem.column?.filter(e => e.display)"
              v-bind="columnItem" :key="columnItem.prop || columnIndex" v-model="vModel[columnItem.prop!]"
              @add="initCollapse" @del="initCollapse"
            >
              <!-- #ifdef MP -->
              <template #[getSlot(columnItem.prop!)]>
                <slot :name="getSlot(columnItem.prop!)" />
              </template>
              <template #[getSlotRight(columnItem.prop!)]>
                <slot :name="getSlotRight(columnItem.prop!)" />
              </template>
              <!-- #endif -->
              <!-- #ifndef MP -->
              <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
                <slot :name="slotName" :row="vModel" :column="columnItem" v-bind="slotProps" />
              </template>
              <!-- #endif -->
            </uvue-form-item>
          </u-collapse-item>
        </template>
      </u-collapse>

      <!-- 按钮 -->
      <view v-if="option.menuBtn && formType !== 'view'" class="uvue-form-menu">
        <u-button v-if="option.submitBtn" type="primary" :loading="submitLoading" @click="onSubmit">
          {{ option.submitText }}
        </u-button>
        <u-button v-if="option.emptyBtn" :loading="submitLoading" @click="resetFields">
          {{ option.emptyText }}
        </u-button>
        <u-button v-if="option.delBtn && formType === 'edit'" type="error" :loading="submitLoading" @click="onDel">
          {{ option.delText }}
        </u-button>
      </view>
    </u-form>
  </view>
</template>

<style lang="scss" scoped>
.uvue-form {
  padding: 10px;

  .uvue-form-menu {
    .u-button {
      margin-top: 10px;
    }
  }
}
</style>
