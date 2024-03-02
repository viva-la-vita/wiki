import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';


type FeatureItem = {
  title: string;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '基础',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    url: '/general'
  },
  {
    title: '乳首',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    url: '/nipple'
  },
  {
    title: '前列腺',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    url: '/prostate'
  },
  {
    title: '催眠',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    url: '/hypnosis'
  },
  {
    title: '潮吹',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    url: '/squirting'
  },
];

function Feature({title, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--lg">
        <Link to={url}>
          <div className={styles.feature}>
            {title}
          </div>
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="生如夏花知识库是由热爱交流与分享的生如夏花创作者们发起的知识共享项目，致力于生产、收集与传播有关性开发的知识。我们的内容部分来自于国外互联网内容的翻译，部分来自于生如夏花社区的实践经验总结。希望这些知识能对您有所帮助。">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: "2rem"}}>
          <p>
            生如夏花知识库是由热爱交流与分享的生如夏花创作者们发起的知识共享项目，致力于生产、收集与传播有关性开发的知识。我们的内容部分来自于国外互联网内容的翻译，部分来自于生如夏花社区的实践经验总结。希望这些知识能对您有所帮助。
          </p>
          <p>
            除非特殊注明，本知识库中的所有内容以 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">CC BY-SA 4.0 协议</a>发布。我们欢迎您自由地复制、演绎和传播这些内容，只要您给出适当的署名并以相同的许可协议分发您的作品。如果您希望帮助我们改善本文档，欢迎您在<a href="https://bbs.viva-la-vita.org">生如夏花论坛</a>提出改进意见。
          </p>
          <p>
            下面是按不同主题分类整理的文章系列，请您点击各链接了解详情。
          </p>
        </div>
        <hr/>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
