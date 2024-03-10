<script setup lang="ts">
import type { paths } from '#build/types/nuxt-open-fetch/schemas/pet'

import { createRequest } from '@yusui/request'

const request = createRequest<keyof paths>({
  baseURL: '/api',
})
request.get('/store/inventory')
</script>

<template>
  <div>
    <AvueForm />
    <el-button />
    <VText />
    <Icon />
  </div>
</template>
