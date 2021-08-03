import React, { memo } from "react";

import { AppBar, Hidden, IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import useStyles from "./style";


const useStylesBootstrap = makeStyles(() => ({
  arrow: {
    color: "black",
  },
  tooltip: {
    backgroundColor: "black",
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const TopBar = memo(({ handleDrawerToggle }) => {
  const classes = useStyles()

  return (
    <AppBar
      position="fixed"
      color="inherit"
      className={classes.appbar}>
      <Toolbar >
        <Hidden smUp implementation="css">
          <IconButton
            edge="start"
            className={classes.menuButton}
            size="medium"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography className={classes.title} variant="h5" noWrap>
          生如夏花
        </Typography>
        <BootstrapTooltip title="主页">
          <IconButton
            color="primary"
            size="medium"
            href="https://viva-la-vita.org">
            <HomeRoundedIcon />
          </IconButton>
        </BootstrapTooltip >
        <BootstrapTooltip
          title="论坛">
          <IconButton
            color="primary"
            size="medium"
            href="https://bbs.viva-la-vita.org">
            <ForumRoundedIcon />
          </IconButton>
        </BootstrapTooltip>
        <BootstrapTooltip title="Github">
          <IconButton
            color="primary"
            size="medium"
            href="https://github.com/viva-la-vita/wiki">
            <GitHubIcon />
          </IconButton>
        </BootstrapTooltip>
      </Toolbar>
    </AppBar>
  )
});



export default TopBar
