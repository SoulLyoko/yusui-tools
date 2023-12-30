<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const list = ref([
  { value: 'vue', link: 'https://github.com/vuejs/vue' },
  { value: 'element', link: 'https://github.com/ElemeFE/element' },
  { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
  { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
  { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
  { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
  { value: 'babel', link: 'https://github.com/babel/babel' },
])
function querySearch(queryString: string, cb: any) {
  const results = queryString
    ? list.value.filter(e => e.value.includes(queryString))
    : list.value
  cb(results)
}
</script>

<template>
  <h3>基础用法</h3>
  <el-autocomplete v-model="value" :fetch-suggestions="querySearch" placeholder="Please Input" clearable />
</template>
