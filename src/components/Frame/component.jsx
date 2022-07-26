import { Drawer, Hidden } from "@material-ui/core";
import React, { memo } from "react";
import Aside from "../Aside"
import TopBar from '../TopBar'
import useStyles from "./style"


const Frame = memo(({ current, navigation, series, window }) => {

  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [isNoContents, setIsNoContents] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <TopBar
        handleDrawerToggle={handleDrawerToggle}
        navigation={navigation}
        series={series}
      />
      {navigation ?
        <nav className={classes.drawer}>
          {/* on mobile phone */}
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
              <Aside current={current} navigation={navigation} series={series} />
            </Drawer>
          </Hidden>
          {/* on pc web*/}
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <Aside current={current} navigation={navigation} series={series} />
            </Drawer>
          </Hidden>
        </nav>
        :
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
            <Aside current={current} navigation={undefined} series={series} />
          </Drawer>
        </Hidden>}
    </div>
  )

})

export default Frame
