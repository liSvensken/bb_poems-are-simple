export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Стихи_просто',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=es6', body: true, defer: true }
    ]
  },

  env: {
    API_URL: 'http://localhost:7000',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~styles/reset.scss',
    '~styles/fontface.scss',
    '~styles/vendor-video-plur',
    '~styles/tooltip'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-plyr', mode: 'client' },
    { src: '~/plugins/v-tooltip', mode: 'client' }
  ],

  // Auto import layout: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  // // Глобальные переходы между страницами
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
