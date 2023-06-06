export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-lodash', 'nuxt-swiper'],
  css: [
    '@/assets/styles/fonts.scss',
    '@/assets/styles/components.scss',
    '@/assets/styles/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
  swiper: {
    modules: ['scrollbar'],
  },
  build: {
    transpile: ['primevue'],
  },
  runtimeConfig: {
    public: {
      baseUrl: 'https://yts.mx/api',
    },
  },
})
