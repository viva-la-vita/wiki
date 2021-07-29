import { graphql, useStaticQuery, Link } from 'gatsby';
import * as React from "react";
import { Fragment } from "react-is";
import contents from "../../contents.yml";
import { sidebarBase, sidebarSectionNormal, sidebarSectionHighlight, sidebarItemNormal, sidebarItemHighlight } from "../styles/aside.module.css"

const SidebarSection = ({ frontmatter, title, title_cn }) => <h2>
  <Link className={ `${sidebarBase} ${frontmatter.title === title ? sidebarSectionHighlight : sidebarSectionNormal}` } to={`/${title === 'index' ? '' : title}`}>{title_cn}</Link>
</h2>;

const SidebarItems = ({ frontmatter, item_list }) => <ul>
  {
    item_list.map(
      ([title, title_cn]) => <li key={title}>
        <Link className={ `${sidebarBase} ${frontmatter.title === title ? sidebarItemHighlight : sidebarItemNormal}` } to={`/${title === 'index' ? '' : title}`}>{title_cn}</Link>
      </li>
    )
  }
</ul>;

const Aside = ({ frontmatter }) => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title_cn
            title
          }
        }
      }
    }
  `);

  let title_cn_lookup = {};
  for (let data of allMdx.nodes) {
    title_cn_lookup[data.frontmatter.title] = data.frontmatter.title_cn;
  }

  return (
    <aside>
      <SidebarSection frontmatter={frontmatter} title={contents.index} title_cn={title_cn_lookup[contents.index]} />
      {
        contents.sections.map(
          ({ subindex, pages }) => <Fragment key={subindex}>
            <SidebarSection frontmatter={frontmatter} title={subindex} title_cn={title_cn_lookup[subindex]} />
            <SidebarItems frontmatter={frontmatter} item_list={
              pages.map(
                ({ title }) => [title, title_cn_lookup[title]]
              )
            }/>
          </Fragment>
        )
      }
    </aside>
  );
};

export default Aside;
