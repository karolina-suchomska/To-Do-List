
export default {
  mode: 'spa',
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: 'To-Do-List',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        name: 'author',
        content: 'Karolina Suchomska'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'to-do-list'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon.ico'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  manifest: {
    icons: [
      {
        src: '/images/favicon.ico',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  },
  router: {
    base: '/To-Do-List/'
  },
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios'
  ]
}
