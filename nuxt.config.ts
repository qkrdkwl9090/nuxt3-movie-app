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
    '@/assets/styles/fonts.scss',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
  ],
  build: {
    transpile: ['primevue'],
  },
})
