import type { Config } from "@docusaurus/types";
import type { ThemeConfig } from "@docusaurus/types/src";
import type { UserThemeConfig } from "@docusaurus/theme-search-algolia";
import topics from "./src";

const navbarItems = [
  ...topics.map(({ title, slug }) => ({
    type: "docSidebar",
    position: "left",
    label: title,
    sidebarId: slug,
  })),
  ...[
    ["主页", "https://viva-la-vita.org"],
    ["论坛", "https://bbs.viva-la-vita.org"],
    ["GitHub", "https://github.com/viva-la-vita"],
    ["爱发电", "https://afdian.net/@vivalavita"],
  ].map(([label, href]) => ({ position: "right", label, href })),
];

const partialManifest = {
  name: "生如夏花知识库",
  short_name: "生如夏花知识库",
  theme_color: "#ff7777",
  background_color: "#424242",
  display: "standalone",
  scope: "./",
  start_url: "./index.html",
};

const generatorInput = {
  source: "./static/favicon.ico",
  options: { log: false },
};

const themeConfig: ThemeConfig & UserThemeConfig = {
  navbar: {
    title: "生如夏花知识库",
    logo: {
      alt: "生如夏花知识库",
      src: "favicon-100x100.ico",
      width: 32,
      height: 32,
    },
    items: navbarItems,
  },
  footer: {
    style: "dark",
    copyright: `CC-BY-SA 4.0 © 2019 - ${new Date().getFullYear()} 生如夏花开发者及创作者`,
  },
  algolia: {
    appId: "DLIWFQPED3",
    apiKey: "23bcb8656cdad247e34b40aea9efdb17",
    indexName: "wiki",
    contextualSearch: true,
  },
};

const config: Config = {
  title: "生如夏花知识库",
  tagline: "探索美好而新奇的性体验",
  url: "https://wiki.viva-la-vita.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",

  // GitHub pages deployment config.
  organizationName: "viva-la-vita",
  projectName: "wiki",
  trailingSlash: false,

  // Internalization
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    "@docusaurus/plugin-content-pages",
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebars.ts"),
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      /** @type {import('docusaurus-plugin-pwa-generator').Options} */
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
      },
    ],
    "@docusaurus/plugin-sitemap",
    [
      "@docusaurus/plugin-google-gtag",
      /** @type {import('@docusaurus/plugin-google-gtag').Options} */
      {
        trackingID: "G-9VRE8Q9M2G",
      },
    ],
  ],

  themes: [
    [
      "@docusaurus/theme-classic",
      /** @type {import('@docusaurus/theme-classic').Options} */
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
  ],

  themeConfig,
};

export default config;
