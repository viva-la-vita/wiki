import * as React from 'react'
import { Fragment } from 'react'
import Aside from './aside'
import Main from './main'
import Nav from './nav'

const Layout = ({ frontmatter, children }) => <Fragment>
  <title>{frontmatter.title_cn}</title>
  <Nav />
  <Aside frontmatter={frontmatter}/>
  <Main frontmatter={frontmatter} children={children}/>
</Fragment>

export default Layout
