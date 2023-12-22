<script setup lang="ts">
import { ref } from 'vue'

import { data, option, page, permission } from './option'

const defaults = ref({})
</script>

<template>
  <CrudPlus
    v-model:defaults="defaults" :data="data" :option="{ ...option, type: 'list' }" :page="page"
    :permission="permission"
  />
</template>
