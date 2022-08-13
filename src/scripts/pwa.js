const pwaAssetGenerator = require('pwa-asset-generator');
const fs = require('fs');
const parse = require('node-html-parser').parse;

const manifest = {
  "name": "生如夏花知识库",
  "short_name": "生如夏花知识库",
  "theme_color": "#ff7777",
  "background_color": "#424242",
  "display": "standalone",
  "scope": "./",
  "start_url": "./index.html",
  "related_applications": [
    {
      "platform": "webapp",
      "url": "https://wiki.viva-la-vita.org/manifest.json"
    }
  ]
};

// Generate images over a module function call, instead of using CLI commands
(async () => {
  const { savedImages, htmlMeta, manifestJsonContent } = await pwaAssetGenerator.generateImages(
    './static/favicon.ico',
    './static',
    {
      log: false,
    });
  manifest.icons = manifestJsonContent.map(icon => ({...icon, src: icon.src.split('/')[1]}));
  fs.writeFileSync('./static/manifest.json', JSON.stringify(manifest));
  const html = parse(htmlMeta.appleLaunchImage);
  const meta = [];
  for (const link of html.querySelectorAll('link')) {
    meta.push({
      tagName: 'link',
      rel: link.getAttribute('rel'),
      href: '/' + link.getAttribute('href').split('/')[1],
      media: link.getAttribute('media')
    })
  }
  fs.writeFileSync('./meta.json', JSON.stringify(meta));
})();
