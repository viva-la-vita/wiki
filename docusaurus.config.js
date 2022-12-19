// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '生如夏花知识库',
  tagline: '探索美好而新奇的性体验',
  url: 'https://wiki.viva-la-vita.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'viva-la-vita',
  projectName: 'wiki',
  trailingSlash: false,

  // Internalization
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    '@docusaurus/plugin-content-pages',
    [
      'docusaurus-plugin-remote-docs',
      /** @type {import('docusaurus-plugin-remote-docs').Options} */
      ({
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        downloader: require('viva-la-vita').downloadWiki,
      }),
    ],
    [
      'docusaurus-plugin-pwa-generator',
      /** @type {import('docusaurus-plugin-pwa-generator').PluginOptions} */
      ({
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        partialManifest: {
          "name": "生如夏花知识库",
          "short_name": "生如夏花知识库",
          "theme_color": "#ff7777",
          "background_color": "#424242",
          "display": "standalone",
          "scope": "./",
          "start_url": "./index.html"
        },
        generatorInput: {
          source: './static/favicon.ico',
          outputFolderPath: './static',
          options: { log: false }
        }
      }),
    ],
    '@docusaurus/plugin-sitemap',
    [
      '@docusaurus/plugin-google-gtag',
      /** @type {import('@docusaurus/plugin-google-gtag').Options} */
      ({
        trackingID: 'G-9VRE8Q9M2G'
      })
    ]
  ],

  themes: [
    [
      '@docusaurus/theme-classic',
      /** @type {import('@docusaurus/theme-classic').Options} */
      ({
        customCss: require.resolve('./src/css/custom.css'),
      }),
    ],
    '@docusaurus/theme-search-algolia',
  ],

  themeConfig:
    /** @type {import('@docusaurus/types').ThemeConfig & import('@docusaurus/theme-search-algolia').UserThemeConfig} */
    ({
      navbar: {
        title: '生如夏花知识库',
        logo: {
          alt: '生如夏花知识库',
          src: 'favicon.ico',
          width: 32,
          height: 32
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'nipple',
            position: 'left',
            label: '乳首',
          },
          {
            type: 'docSidebar',
            sidebarId: 'prostate',
            position: 'left',
            label: '前列腺',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hypnosis',
            position: 'left',
            label: '催眠',
          },
          {
            href: 'https://viva-la-vita.org',
            label: '主页',
            position: 'right',
          },
          {
            href: 'https://bbs.viva-la-vita.org',
            label: '论坛',
            position: 'right',
          },
          {
            href: 'https://github.com/viva-la-vita',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://afdian.net/@vivalavita',
            label: '爱发电',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `CC-BY-SA 4.0 © 2019 - ${new Date().getFullYear()} 生如夏花开发者及创作者`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'DLIWFQPED3',
        apiKey: '23bcb8656cdad247e34b40aea9efdb17',
        indexName: 'wiki',
        contextualSearch: true,
      }
    }),
};

module.exports = config;
