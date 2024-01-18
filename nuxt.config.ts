export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt3-movie-app/',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-lodash', 'nuxt-swiper', '@pinia/nuxt'],
  css: [
    '@/assets/styles/fonts.scss',
    '@/assets/styles/components.scss',
    '@/assets/styles/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '@/assets/styles/restyle.scss',
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
