import { Divider, List, ListItem } from '@material-ui/core';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { memo } from "react";
import { Fragment } from 'react-is';
// import { sidebarBase, sidebarSectionNormal, sidebarSectionHighlight, sidebarItemNormal, sidebarItemHighlight } from "../styles/aside.module.css"
import useStyles from "./style"



const Aside = memo(({ contents, frontmatter }) => {
  const classes = useStyles();


  const SidebarSection = ({ frontmatter, title, title_cn }) =>
    <Link
      key={title}
      className={`${classes.sidebarBase} ${frontmatter.title === title ? classes.sidebarSectionHighlight : classes.sidebarSectionNormal}`}
      to={`/${contents.series}/${title === 'index' ? '' : title}`}>
      <ListItem button key={title}>
        {title_cn}
      </ListItem>
    </Link>



  const SidebarItems = ({ frontmatter, item_list }) =>
    <List>
      {
        item_list.map(
          ([title, title_cn]) =>
            <Link
              key={title}
              className={`${classes.sidebarBase} ${frontmatter.title === title ? classes.sidebarItemHighlight : classes.sidebarItemNormal}`}
              to={`/${contents.series}/${title === 'index' ? '' : title}`}>
              <ListItem button key={title}>
                {title_cn}
              </ListItem>
            </Link>

        )
      }
    </List>;



  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title_cn
            title
          }
          slug
        }
      }
    }
  `);

  let title_cn_lookup = {};
  for (let data of allMdx.nodes) {
    if (data.slug.split('/')[0] === contents.series)
    title_cn_lookup[data.frontmatter.title] = data.frontmatter.title_cn;
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {/* about */}
        <SidebarSection frontmatter={frontmatter} title={contents.index} title_cn={title_cn_lookup[contents.index]} />
        {
          contents.sections.map(
            ({ subindex, pages }) =>
              <Fragment key={subindex}>
                <SidebarSection
                  frontmatter={frontmatter} title={subindex} title_cn={title_cn_lookup[subindex]} />
                <SidebarItems
                  frontmatter={frontmatter}
                  item_list={
                    pages.map(
                      ({ title }) => [title, title_cn_lookup[title]]
                    )
                  } />
              </Fragment>
          )
        }
      </List>
    </div>
  );
});


export default Aside;
