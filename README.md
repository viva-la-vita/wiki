# 生如夏花知识库

本仓库存放了[生如夏花知识库](https://doc.viva-la-vita.org/)的文档和源代码，托管在 [Netlify](https://netlify.app/) 建站服务上。

## 上手开发

本地环境要求 Node 12.x 或更高。

```bash
git clone git@github.com:viva-la-vita/wiki.git
cd wiki
npm i
npm run develop
```

访问 http://localhost:8000/ 即可看到网页。对本地源代码进行修改时网页会自动重载。

## Gatsby 静态页面生成

页面由 React 渲染，页面模板在 `src/pages/{mdx.slug}.js` 中定义。对于每一个 `docs/` 目录下的 MDX 文档，首先用 GraphQL 获取元数据和内容，然后在 `BlogPost` 组件中渲染。`BlogPost` 中调用的 `Layout` 组件在 `src/components` 中定义，样式在 `src/styles` 中定义。

## Netlify CMS 内容管理

`docs/` 下的 MDX 文档由 Netlify CMS 来管理。要在本地运行该系统，首先在 `static/admin/config.yml` 中将 `local_backend: true` 取消注释，然后将 `publish_mode: editorial_workflow` 注释掉；同时在另一个终端窗口运行 `npx netlify-cms-proxy-server` 启动本地文件服务器。然后可以在内容管理页面（http://localhost:8000/admin/）看到所有内容。

- 「文章」集合对应的是 `docs/` 目录下的文章
- 「元数据」集合中「目录」文件对应的是 `contents.yml`，它指定了侧边栏的目录
