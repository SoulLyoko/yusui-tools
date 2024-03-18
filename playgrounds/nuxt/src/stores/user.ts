export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    name: 'nuxt',
  })

  return {
    userInfo,
  }
})
