import React, { memo } from "react";
import Main from "../Main"
import Frame from "../Frame";
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider as ThemeProvider, createTheme } from '@material-ui/core/styles';
import useStyles from "./style";

const Layout = memo(({ current, navigation, series, neighbor, children }) => {
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
        <title>{current.title}</title>
        <div className={classes.root}>
          <Frame current={current} navigation={navigation} series={series} />
          <Main current={current} neighbor={neighbor} children={children} />
        </div >
      </ThemeProvider>
    </>

  )

})

export default Layout
