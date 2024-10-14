<script setup lang="ts">
import type { UvueFormColumn } from '../uvue-form'
import type { PropType } from 'vue'

import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  children: { type: Object as PropType<Required<UvueFormColumn>['children']>, default: () => ({}) },
  label: { type: String },
  prop: { type: String },
  disabled: { type: Boolean },
})
const emit = defineEmits(['update:modelValue', 'add', 'del'])

const vModel = ref<any[]>([])
watch(
  () => props.modelValue,
  (val) => {
    if (Array.isArray(val))
      vModel.value = val
    else vModel.value = []
  },
  { immediate: true, deep: true },
)
watch(vModel, val => emit('update:modelValue', val), { deep: true })

const defaultValues = computed(() => {
  const values: any = {}
  props.children.column?.forEach((e) => {
    if ('value' in e)
      values[e.prop!] = e.value
  })
  return values
})

function addItem() {
  const done = (row: any) => {
    vModel.value.push(row)
    emit('add', row)
  }
  if (props.children?.limit && vModel.value.length === props.children.limit)
    return uni.showToast({ title: `最多添加${props.children.limit}条`, icon: 'none' })

  if (typeof props.children?.rowAdd === 'function')
    props.children.rowAdd(done)
  else
    done(defaultValues.value)
}
function delItem(index: number) {
  const row = vModel.value.find((e, i) => i === index)
  const done = () => {
    vModel.value = vModel.value.filter((e, i) => i !== index)
    emit('del', row, index)
  }
  if (typeof props.children?.rowDel === 'function')
    props.children.rowDel(row, done)
  else
    done()
}
</script>

<template>
  <view class="uvue-dynamic">
    <u-row>
      <u-col span="10">
        <u-text :text="label" />
      </u-col>
      <u-col span="2">
        <u-text
          v-if="!disabled && children.addBtn" :text="children.delText || '新增'" type="primary" align="right"
          @click="addItem"
        />
      </u-col>
    </u-row>
    <template v-for="(dataItem, dataIndex) in vModel" :key="dataItem[prop!] || dataIndex">
      <uvue-form v-model="vModel[dataIndex]" :option="children">
        <!-- #ifndef MP -->
        <!-- @vue-skip -->
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
          <slot :name="slotName" v-bind="slotProps" />
        </template>
        <!-- #endif -->
      </uvue-form>

      <u-text
        v-if="!disabled && children.delBtn" :text="children.delText || '删除'" type="error" align="right"
        @click="delItem(dataIndex)"
      />

      <u-line margin="10px 0" />
    </template>
  </view>
</template>

<style lang="scss" scoped>
.uvue-dynamic {
  width: 100%;

  & > .uvue-form {
    padding: 0;
  }
}
</style>
