import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import Layout from '../components/layout'

const BlogPost = ({ data }) => { // highlight-line
  return (
    <Layout frontmatter={data.mdx.frontmatter}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

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
