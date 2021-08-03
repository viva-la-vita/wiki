import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
// import Layout from '../components/layout'

import Layout from "../components/material/Layout";

const BlogPost = React.memo(({ data }) => { // highlight-line


  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <Layout frontmatter={data.mdx.frontmatter}>
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
    }
  }
`

export default BlogPost
