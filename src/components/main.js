import * as React from 'react'
import { main, container, heading } from '../styles/main.module.css'
import Header from './header'
import Footer from './footer'

const Main = ({frontmatter, children}) => {
  return (
    <main id={main} className={container}>
      <Header className={heading} frontmatter={frontmatter}/>
      {children}
      <Footer />
    </main>
  )
}

export default Main
