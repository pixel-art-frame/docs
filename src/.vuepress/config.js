const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Pixel Art Frame',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  host: 'localhost',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3730A3' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'pixel-art-frame/firmware',
    repoLabel: 'GitHub',
    editLinks: true,
    docsRepo: 'pixel-art-frame/docs',
    docsBranch: 'main',
    editLinkText: 'Help improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'User Guide',
        link: '/1.x/user/',
      },
      {
        text: 'Technical Documentation',
        link: '/1.x/technical/'
      },
      {
        text: 'Pixel Art Frame',
        link: 'https://pixelartframe.com'
      }
    ],
    sidebar: {
      '/1.x/': [
        {
          title: 'About',
          path: '/1.x/about',
          children: []
        },
        {
          title: 'Building',
          path: '/1.x/user/building',
          children: [
            '/1.x/user/building/hardware',
            '/1.x/user/building/software',
            '/1.x/user/building/frame',
          ]
        },
        {
          title: 'Usage',
          path: '/1.x/user/usage/',
          children: [
            '/1.x/user/usage/setup',
            '/1.x/user/usage/finding_art',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
