<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <Icon icon="line-md:home-simple" width="40" />
    <h3>Vitesse</h3>
    <p text-sm op75>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>
    <p w-250px mx-auto>
      <el-input v-model="name" placeholder="What's your name?" text-center @keydown.enter="go" />
    </p>
    <el-button :disabled="!name" type="primary" @click="go">
      Go
    </el-button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
