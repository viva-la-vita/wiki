import React, { memo } from "react";

import {
  AppBar, Hidden, IconButton, Button,
  Toolbar, Tooltip, Typography, Menu, MenuItem
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

// import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import useStyles from "./style";
import { Link } from 'gatsby';
import { withStyles } from "@material-ui/styles";


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

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const TopBar = memo(({ handleDrawerToggle, series, navigation }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget)
    // console.log(anchorEl)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="fixed"
      color="inherit"
      className={classes.appbar}>
      <Toolbar >
        <Hidden className={classes.phoneHidden} smUp implementation="css">
          <IconButton
            edge="start"
            className={classes.menuButton}
            size="medium"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* <BootstrapTooltip title="生~如夏花">
          <IconButton

            className={classes.flowButton}
            size="medium"
            color="inherit"
            component={Link}
            to='/'>
            <EmojiNatureIcon />
          </IconButton>
          </ BootstrapTooltip > */}
        </Hidden>
        <Hidden className={classes.title} xsDown implementation="css">
          <Typography variant="h5" noWrap color="primary">
            <Link className={classes.titleLink} to='/' variant="inherit">
              生如夏花
            </Link>
          </Typography>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickMenu}>
            选择主题
          </Button>


          <StyledMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
            {
              series.map(({ path, title }) =>
                <StyledMenuItem
                  component={Link}
                  to={path}
                  selected={path === navigation?.path}
                  key={path}
                >

                  {title}
                </StyledMenuItem >
              )
            }
          </StyledMenu>
        </Hidden>


        {/* {
          allMdx.nodes.map(({ frontmatter, slug }) =>
            <StyledMenuItem>
              <Link key={slug} to={`/${slug}`}>{frontmatter.title_cn}</Link>
            </StyledMenuItem >
          )
        } */}
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
    </AppBar >
  )
});



export default TopBar
