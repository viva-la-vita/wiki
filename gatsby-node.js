const axios = require('axios');
const { resolve } = require('path');

require('dotenv').config({
  path: `.env`,
});

exports.sourceNodes = async ({
  actions: {createNode},
  createNodeId,
  createContentDigest
}) => {
  const { data } = await axios.get(`/navigation/render/1`, {
    baseURL: 'https://api.viva-la-vita.org/api',
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    params: {
      type: 'TREE'
    }
  });

  function preprocess(object) {
    return {
      sid: object.related.id,
      path: object.path,
      title: object.related.title,
      items: object.items.map(preprocess)
    };
  }

  function flatten(object) {
    return [{
      sid: object.sid,
      path: object.path,
      title: object.title
    }].concat(...object.items.map(flatten));
  }

  const seriesList = data.map(preprocess);
  const indices = [].concat(...seriesList.map(flatten));

  seriesList.map(series => createNode({
    ...series,
    id: createNodeId(`Series-${series.path}`),
    internal: {
      type: `StrapiSeries`,
      contentDigest: createContentDigest(series)
    }
  }));

  indices.map(index => createNode({
    ...index,
    id: createNodeId(index.path),
    internal: {
      type: `StrapiIndex`,
      contentDigest: createContentDigest(index)
    }
  }));
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query Indices {
      allStrapiIndex {
        nodes {
          sid
          path
        }
      }
    }
  `);
  data.allStrapiIndex.nodes.forEach(({ sid, path }) => {
    actions.createPage({
      path: path,
      component: resolve("./src/templates/article.js"),
      context: { sid: sid, key: `/${path.split('/')[1]}` },
    });
  });
}
