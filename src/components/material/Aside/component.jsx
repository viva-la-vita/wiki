import { Divider, Hidden, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { memo } from "react";
import { Fragment } from 'react-is';
// import { sidebarBase, sidebarSectionNormal, sidebarSectionHighlight, sidebarItemNormal, sidebarItemHighlight } from "../styles/aside.module.css"
import useStyles from "./style"



const Aside = memo(({ contents, frontmatter }) => {
  const classes = useStyles();

  // undefind contents is ok
  if (!contents) {
    contents = {
      sections: null,
      series: "",
    }
  }

  // console.log(contents.series)

  const SidebarSeriesSection = ({ title, title_cn }) =>
    <Link
      className={`${classes.sidebarBase} ${contents.series === title ? classes.sidebarSectionHighlight : classes.sidebarSectionNormal}`}
      to={`/${title}`}>
      <ListItem button key={title}>
        {title_cn}
      </ListItem>
    </Link>



  const SidebarSection = ({ frontmatter, title, title_cn, linkable }) => {
    if (linkable) {
      return <Link
        key={title}
        className={`${classes.sidebarBase} ${frontmatter.title === title ? classes.sidebarSectionHighlight : classes.sidebarSectionNormal}`}
        to={`/${contents.series}/${title === 'index' ? '' : title}`}>
        <ListItem button key={title}>
          {title_cn}
        </ListItem>
      </Link>
    }
    return <div className={`${classes.sidebarBase} ${classes.sidebarSectionNormal}`}>
      <ListItem key={title}> {title_cn} </ListItem>
    </div>
  }


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



  const { allMdx: allMdxContents } = useStaticQuery(graphql`
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
  // console.log(allMdxContents)
  const allMdxSeriesNodes = allMdxContents.nodes.filter((node) => {
    return node.slug !== "" && node.frontmatter.title === "index"
  })
  // console.log(allMdxSeriesNodes)

  //   const { allMdx } = useStaticQuery(graphql`
  //   query {
  //     allMdx(filter: {frontmatter: {title: {eq: "index"}}, slug: {ne: ""}}) {
  //       nodes {
  //         frontmatter {
  //           title_cn
  //         }
  //         slug
  //       }
  //     }
  //   }
  // `);
  // console.log(allMdxSeriesNodes)

  let title_cn_lookup = {};
  for (let data of allMdxContents.nodes) {
    if (data.slug.split('/')[0] === contents.series)
      title_cn_lookup[data.frontmatter.title] = data.frontmatter.title_cn;
  }

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
          allMdxSeriesNodes.map(({ frontmatter, slug }) =>
            <SidebarSeriesSection
              key={slug.split("/")[0]}
              title={slug.split("/")[0]}
              title_cn={frontmatter.title_cn}
            />
          )
        }
        <Divider />
      </Hidden>

      <Divider />
      {contents.sections ? 
        <List>
          <SidebarSection
            frontmatter={frontmatter}
            title={contents.index}
            title_cn={title_cn_lookup[contents.index]}
            linkable={true} />
          {
            contents.sections.map(
              ({ subindex, pages }) =>
                <Fragment key={subindex}>
                  <SidebarSection
                    frontmatter={frontmatter}
                    title={subindex}
                    title_cn={title_cn_lookup[subindex]}
                    linkable={true} />
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
        :
        <div></div>
      }
    </div>
  );
});


export default Aside;
