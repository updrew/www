const builtAt = new Date().toISOString()

export default async () => {
  return {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return 'UpDrew - Status page for those who care';
      },
      meta: [
        // General
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Status page for those who care." },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@updrewhq' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@cx42net' },
        { hid: 'twitter:title', name: 'twitter:title', content: "UpDrew.com" },
        { hid: 'twitter:description', name: 'twitter:description', content: "Status page for those who care." },
        // { hid: 'twitter:image', name: 'twitter:image', content: null },

        // Facebook
        { hid: 'og:title', name: 'og:title', content: "UpDrew.com" },
        { hid: 'og:site_name', name: 'og:site_name', content: "UpDrew.com" },
        { hid: 'og:description', name: 'og:description', content: "Status page for those who care." },
        { hid: 'og:url', name: 'og:url', content: 'https://updrew.com' },
        // { hid: 'og:image', name: 'og:image', content: null },
        { hid: 'og:type', name: 'og:type', content: 'blog' },
        { hid: 'og:locale', name: 'og:locale', content: 'en_US' },
        { property: 'og:updated_time', content: builtAt }
      ],
      link: [
      ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    ]
  }
}