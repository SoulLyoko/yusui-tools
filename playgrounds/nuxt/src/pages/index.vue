<script setup lang="ts">
const route = useRoute()

const userStore = useUserStore()
</script>

<template>
  <div>
    <Icon icon="ep:plus" />
    <Chart />
    userInfo: {{ userStore.userInfo }}
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
