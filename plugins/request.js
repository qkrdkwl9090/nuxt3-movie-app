import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxt) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000, cacheTime: 5000 } },
  })
  const options = { queryClient }

  nuxt.vueApp.use(VueQueryPlugin, options)
})
