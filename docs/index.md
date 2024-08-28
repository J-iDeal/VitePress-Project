---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: 将 Markdown 变成优雅的文档，只需几分钟
  image:
    src: /assets/images/AI02.png
    alt: Logo
  actions:
    # theme 按钮主题样式 'brand' | 'alt'
    # text 按钮主题文本
    # link 按钮主题链接地址
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: CSS
    link: /views/CSS/CodeBlock
    details: 层叠样式表

  - title: JavaScript
    link: /views/JavaScript/codeBlock/index.md
    details: JavaScript是世界上最好的语言

  - title: ElementPlus
    link: /views/Vue/elementPlus/Button.md
    details: 点Element外卖,用ElementPlus组件
---
