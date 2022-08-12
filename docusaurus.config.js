// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'viva-la-vita', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(255, 136, 136)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/logo.svg',
            color: 'rgb(255, 136, 136)',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '生如夏花知识库',
        logo: {
          alt: '生如夏花知识库',
          src: 'logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'nipple/index',
            position: 'left',
            label: '乳首',
          },
          {
            type: 'doc',
            docId: 'prostate/index',
            position: 'left',
            label: '前列腺',
          },
          {
            type: 'doc',
            docId: 'hypnosis/index',
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
    }),
};

module.exports = config;
