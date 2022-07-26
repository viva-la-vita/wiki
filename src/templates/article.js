import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from "../components/Layout";

const Article = React.memo(({ data }) => { // highlight-line
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { strapiArticle: article, strapiIndex: index, strapiSeries: navigation, allStrapiSeries } = data;
  const series = allStrapiSeries.nodes;
  const current = { title: article.title, path: index.path };

  // find neighbor in contents
  const flatten = object => [{
    path: object.path,
    title: object.title
  }].concat(...(object.items ? object.items.map(flatten) : []));

  console.log(navigation);
  const flatNavigation = flatten(navigation);
  console.log(flatNavigation);
  const i = flatNavigation.findIndex(x => x.path === current.path);
  const neighbor = {
    left: flatNavigation[i - 1],
    right: flatNavigation[i + 1]
  }

  return (
    <Layout
      current={current}
      navigation={navigation}
      series={series}
      neighbor={neighbor}
    >
      <MDXRenderer>
        {article.childStrapiArticleContentTextnode.childMdx.body}
      </MDXRenderer>
    </Layout>
  )
})

export const query = graphql`
  query Article($sid: Int, $key: String) {
    strapiArticle(strapi_id: {eq: $sid}) {
      title
      childStrapiArticleContentTextnode {
        childMdx {
          body
        }
      }
    }
    strapiIndex(sid: {eq: $sid}) {
      path
    }
    strapiSeries(path: {eq: $key}) {
      path
      title
      items {
        path
        title
        items {
          path
          title
        }
      }
    }
    allStrapiSeries {
      nodes {
        path
        title
      }
    }
  }
`

export default Article;
