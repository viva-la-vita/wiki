const axios = require('axios');
const fs = require('fs');

require('dotenv').config({
  path: `.env`,
});

const preprocess = (article, dev) => {
  const yaml = `---\ntitle: ${article.title}\nsidebar_position: ${article.order + dev}\n---\n`;
  const body = article.related.content.replaceAll(/^(#+)/gm, '#$1');
  return `${yaml}\n${body}`;
}


(async () => {
  const { data } = await axios.get(`/navigation/render/1`, {
    baseURL: 'https://api.viva-la-vita.org/api',
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    params: {
      type: 'TREE'
    }
  });

  for (const series of data) {
    fs.mkdirSync(`docs${series.path}`, { recursive: true });
    fs.writeFileSync(`docs${series.path}/index.md`, preprocess(series, 0));
    for (const section of series.items) {
      fs.mkdirSync(`docs${section.path}`, { recursive: true });
      fs.writeFileSync(`docs${section.path}/index.md`, preprocess(section, 1));
      for (const article of section.items) {
        fs.writeFileSync(`docs${article.path}.md`, preprocess(article, 0));
      }
    }
  }
})();
