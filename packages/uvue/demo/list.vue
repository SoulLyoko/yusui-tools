<script setup lang="ts">
import { ref } from 'vue'
import { onPageScroll, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'

import { listOption } from './option'

const data = ref<any[]>([])
const status = ref<any>('loadmore')
const searchValue = ref('')

function loadData(isLoadmore = false) {
  if (isLoadmore && status.value === 'nomore')
    return
  const total = 20
  status.value = 'loading'
  setTimeout(() => {
    if (!isLoadmore)
      data.value = []
    data.value.push(
      ...Array.from({ length: 10 }).map((e, i) => {
        const id = i + data.value.length
        return { id, userName: `admin${id}`, nickName: `管理员${id}`, deptName: '研发部' }
      }),
    )
    status.value = data.value.length === total ? 'nomore' : 'loadmore'
    uni.stopPullDownRefresh()
  }, 100)
}
loadData(false)

const scrollTop = ref(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})
onPullDownRefresh(loadData)
onReachBottom(() => loadData(true))

function onSearch() {
  loadData(false)
}
</script>

<template>
  <uvue-list
    v-model:searchValue="searchValue"
    :data="data"
    :option="listOption"
    :status="status"
    :scroll-top="scrollTop"
    @loadmore="loadData(true)"
    @search-custom="onSearch"
  >
    <template #value>
      <view>slot</view>
    </template>
  </uvue-list>
</template>
