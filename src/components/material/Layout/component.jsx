import React, { memo } from "react";
import Main from "../Main"
import Frame from "../Frame";
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider as ThemeProvider, createMuiTheme as createTheme } from '@material-ui/core/styles';
import useStyles from "./style";

const Layout = memo(({ frontmatter, contents, children }) => {



  const classes = useStyles()

  const theme = createTheme({
    root: {
      display: 'flex',
    },
    palette: {
      primary: {
        main: "rgb(62, 175, 124)"
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <title>{frontmatter.title_cn}</title>
        <div className={classes.root}>
          <Frame frontmatter={frontmatter} contents={contents} />
          <Main frontmatter={frontmatter} children={children} />
        </div >
      </ThemeProvider>
    </>

  )

})

export default Layout
