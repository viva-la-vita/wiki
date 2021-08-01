import { Typography } from "@material-ui/core";
import React, { memo } from "react";
import Footer from "../Footer"
import Header from '../Header'
import useStyles from "./style"

const Main = memo(({ frontmatter, children }) => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Header frontmatter={frontmatter} />
      <Typography paragraph>
        {children}
      </Typography>
      <Footer />
    </main>
  )

})

export default Main
