<script setup lang="ts">
import type { UvueFilterItem, UvueFilterOption } from './types'
import type { PropType } from 'vue'

import { useVModel } from '@vueuse/core'
import { useDict } from '@yusui/composables'
// @ts-ignore
import { addUnit } from 'uview-plus'
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Object, default: () => ({}) },
  option: { type: Object as PropType<UvueFilterOption>, default: () => ({}) },
})
const emit = defineEmits(['change'])
const filterForm = useVModel(props, 'modelValue')

const dicStorage = ref<Record<string, any>>({})
watch(() => props.option, initDic, { immediate: true })
function initDic() {
  props.option.items?.forEach((item) => {
    const { data } = useDict(item)
    dicStorage.value[item.prop!] = {
      data,
      value: item.multiple ? [] : undefined,
    }
  })
}

const dropdownRef = ref()
function onConfirm({ prop }: UvueFilterItem) {
  // const value = transform ? this.checked.join(',') : this.checked
  filterForm.value[prop!] = dicStorage.value[prop!].value
  emit('change', filterForm.value)
  dropdownRef.value.close()
}
function onClear({ prop, multiple }: UvueFilterItem) {
  dicStorage.value[prop!].value = multiple ? [] : undefined
  delete filterForm.value[prop!]
  emit('change', filterForm.value)
  dropdownRef.value.close()
}

/**
 * 解决dropdown组件放在sticky组件下会遮挡其他元素的问题
 */
function dropdownMounted() {
  setTimeout(() => {
    dropdownRef.value.contentHeight = 0
  }, 100)
}
function dropdownOpen() {
  dropdownRef.value.getContentHeight()
}
function dropdownClose() {
  setTimeout(() => {
    dropdownRef.value.contentHeight = 0
  }, 300)
}
</script>

<template>
  <u-dropdown
    v-if="option?.items?.length" v-bind="option" ref="dropdownRef" class="uvue-filter" @open="dropdownOpen"
    @close="dropdownClose" @vue:mounted="dropdownMounted"
  >
    <u-dropdown-item
      v-for="item in option.items || []" :key="item.prop" v-bind="item" v-model="filterForm[item.prop!]"
      :options="dicStorage[item.prop!]"
    >
      <template #default>
        <scroll-view scroll-y :style="{ height: addUnit(item.height) }">
          <view class="uvue-filter-item">
            <u-checkbox-group v-if="item.multiple" v-model="dicStorage[item.prop!].value" placement="column" icon-placement="right">
              <u-checkbox v-for="opt in dicStorage[item.prop!].data" :key="opt.value" :name="opt.value" :label="opt.label" />
            </u-checkbox-group>
            <u-radio-group v-else v-model="dicStorage[item.prop!].value" placement="column" icon-placement="right">
              <u-radio v-for="opt in dicStorage[item.prop!].data" :key="opt.value" :name="opt.value" :label="opt.label" />
            </u-radio-group>
            <u-row gutter="10">
              <u-col span="6">
                <u-button type="primary" size="small" @click="onConfirm(item)">
                  确定
                </u-button>
              </u-col>
              <u-col span="6">
                <u-button size="small" @click="onClear(item)">
                  清空
                </u-button>
              </u-col>
            </u-row>
          </view>
        </scroll-view>
      </template>
    </u-dropdown-item>
  </u-dropdown>
</template>

<style lang="scss">
.uvue-filter {
  .uvue-filter-item {
    padding: 10px;
    background-color: #fff;
  }
}
</style>
