import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line

import Layout from "../components/material/Layout";

const BlogPost = React.memo(({ data }) => { // highlight-line
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  let series = data.mdx.slug.split('/')[0];
  let contents = undefined;
  for (let item of data.allContentsYaml.nodes) {
    if (item.series === series) {
      contents = item;
      break
    }
  }
  // nipple or prostate
  console.log(series);

  console.log(contents);

  return (
    <Layout frontmatter={data.mdx.frontmatter} contents={contents}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
})

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        title_cn
      }
      body
      slug
    }
    allContentsYaml {
      nodes {
        index
        series
        sections {
          subindex
          pages {
            title
          }
        }
      }
    }
  }
`

export default BlogPost
