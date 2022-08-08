require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://wiki.viva-la-vita.org",
    title: "生如夏花",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `生如夏花知识库`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ff7777`,
        display: `standalone`,
        icon: "src/images/icon.png",
        include_favicon: false
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`**`],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'https://api.viva-la-vita.org',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['article'],
        singleTypes: [],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-theme-material-ui`,
  ],
  flags: {
    DEV_SSR: false
   }
};
