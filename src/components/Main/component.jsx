import { Typography } from "@material-ui/core";
import React, { memo } from "react";
import Footer from "../Footer"
import Header from '../Header'
import useStyles from "./style"

const Main = memo(({ current, neighbor, children }) => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Header title={current.title} />
      <Typography component={'span'} paragraph>
        {children}
      </Typography>
      <Footer neighbor={neighbor}/>
    </main>
  )

})

export default Main
