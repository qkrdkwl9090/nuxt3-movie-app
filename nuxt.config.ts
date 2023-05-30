export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/styles/fonts.scss',
    '@/assets/styles/components.scss',
    '@/assets/styles/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://yts.mx/api',
    },
  },
})
