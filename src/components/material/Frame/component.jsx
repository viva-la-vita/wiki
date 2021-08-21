import { Drawer, Hidden } from "@material-ui/core";
import React, { memo } from "react";
import Aside from "../Aside"
import TopBar from '../TopBar'
import useStyles from "./style"


const Frame = memo(({ contents, frontmatter, window }) => {

  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [isNoContents, setIsNoContents] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const series = Boolean(contents) ? contents.series : undefined

  return (
    <div>
      <TopBar
       handleDrawerToggle={handleDrawerToggle} 
       series={series}
       />
      { contents ?
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Aside frontmatter={frontmatter} contents={contents} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Aside frontmatter={frontmatter} contents={contents} />
          </Drawer>
        </Hidden>
      </nav>
      : <div></div> }
    </div>
  )

})

export default Frame
