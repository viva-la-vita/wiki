import { Divider, Hidden, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React, { memo } from "react";
import { Fragment } from 'react-is';
// import { sidebarBase, sidebarSectionNormal, sidebarSectionHighlight, sidebarItemNormal, sidebarItemHighlight } from "../styles/aside.module.css"
import useStyles from "./style"



const Aside = memo(({ current, navigation, series }) => {
  const classes = useStyles();

  const SidebarSeriesItem = ({ path, title }) => <Link
    key={path}
    className={`${classes.sidebarBase} ${path === navigation?.path ? classes.sidebarSectionHighlight : classes.sidebarSectionNormal}`}
    to={path}>
    <ListItem button key={path}>
      {title}
    </ListItem>
  </Link>

  const SidebarSectionItem = ({ path, title }) => <Link
    key={path}
    className={`${classes.sidebarBase} ${path === current.path ? classes.sidebarSectionHighlight : classes.sidebarSectionNormal}`}
    to={path}>
    <ListItem button key={path}>
      {title}
    </ListItem>
  </Link>

  const SidebarItem = ({ path, title }) => <Link
    key={path}
    className={`${classes.sidebarBase} ${path === current.path ? classes.sidebarItemHighlight : classes.sidebarItemNormal}`}
    to={path}>
    <ListItem button key={path}>
      {title}
    </ListItem>
  </Link>

  const SidebarSection = ({ path, title, items }) => <Fragment key={path}>
    <SidebarSectionItem
      path={path}
      title={title}
    />
    <List>
      {
        items.map(SidebarItem)
      }
    </List>
  </Fragment>

  return (
    <div>
      <Toolbar>
        <Typography variant="h5" noWrap color="primary">
          <Link className={classes.titleLink} to='/' variant="inherit">
            生如夏花
          </Link>
        </Typography>
      </Toolbar>

      <Divider />
      <Hidden smUp implementation="css">
        {
          series.map(SidebarSeriesItem)
        }
        <Divider />
      </Hidden>

      <Divider />
      {navigation ?
        <List>
          <SidebarSectionItem
            path={navigation.path}
            title={navigation.title}
          />
          {
            navigation.items.map(SidebarSection)
          }
        </List>
        :
        <div></div>
      }
    </div>
  );
});

export default Aside;
