<script setup lang="ts">
import { ref } from 'vue'

import { data, listOption, page, permission } from './option'

const defaults = ref({})
</script>

<template>
  <ProCrud
    v-model:defaults="defaults" :data="data" :option="listOption" :page="page"
    :permission="permission"
  />
</template>
