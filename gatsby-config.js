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
        icon: "src/images/icon.png",
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
