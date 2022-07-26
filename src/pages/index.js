import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout";

const Index = React.memo(({ data }) => { // highlight-line
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const series = data.allStrapiSeries.nodes;
  const current = { title: '主页', path: '/' };

  return (
    <Layout
    current={current}
    series={series}
    >
      <p>
      「生如夏花」是一项由爱好者发起的开源项目，致力于美好而新奇的性体验的探索。
      </p>
      <p>
      本文档以 GPLv3 协议发布，您可以在协议允许的范围内对其进行自由的复制和传播。如果您希望帮助我们改善本文档，请您点击页面右上方的 GitHub 仓库链接。
      </p>
    </Layout>
  )
})

export const query = graphql`
  query Index {
    allStrapiSeries {
      nodes {
        path
        title
      }
    }
  }
`

export default Index;
