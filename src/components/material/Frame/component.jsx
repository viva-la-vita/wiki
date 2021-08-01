import { Drawer, Hidden } from "@material-ui/core";
import React, { memo } from "react";
import Aside from "../Aside"
import TopBar from '../TopBar'
import useStyles from "./style"


const Frame = memo(({ frontmatter, window }) => {

  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
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
            <Aside frontmatter={frontmatter} />
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
            <Aside frontmatter={frontmatter} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )

})

export default Frame
