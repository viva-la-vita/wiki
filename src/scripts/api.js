const axios = require('axios').default;
const fs = require('fs');

const preprocess = (article, toplevel) => {
  const yaml = `---\ntitle: ${toplevel ? '简介' : article.title}\nsidebar_position: ${toplevel ? -1 : article.order}\n---\n`;
  let body = article.related.content;
  body = body.replaceAll(/^(#+)/gm, '#$1');
  return `${yaml}\n${body}`;
}

const visit = (node, toplevel=false) => {
  if (toplevel || node.items.length) {
    fs.mkdirSync(`docs${node.path}`, { recursive: true });
    fs.writeFileSync(`docs${node.path}/index.mdx`, preprocess(node, toplevel));
    for (const child of node.items) {
      visit(child);
    }
  } else {
    fs.writeFileSync(`docs${node.path}.mdx`, preprocess(node, toplevel));
  }
}

(async () => {
  const { data } = await axios.get(`/navigation/render/1`, {
    baseURL: 'https://api.viva-la-vita.org/api',
    params: {
      type: 'TREE'
    }
  });

  data.map(x => visit(x, true));
})();
