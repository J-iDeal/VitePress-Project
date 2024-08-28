import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar.mjs' // 引入自定义侧边栏配置
import navbar from './config/navbar.mjs' // 引入自定义侧边栏配置

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config

export default defineConfig({
  title: "iDeal-Press", // 网站标题
  description: "A VitePress Site", //网站描述
  base: "/iDeal-Press/", // 路径配置

  head: [ // 网站标签头部配置
    ['link', { rel: 'icon', href: 'https://vitepress.dev/vitepress-logo-large.webp' }]
  ],
  themeConfig: {
    logo: '/assets/icon/logo.svg', // 网站logo

    siteTitle: 'iDeal-Press', // 页面标题 隐藏:false/默认使用网站title

    search: { // 搜索
      provider: 'local'
    },

    nav: navbar, // 顶部导航栏
    sidebar: sidebar, // 侧边栏

    socialLinks: [ // 外部链接
      { icon: 'github', link: 'https://github.com/J-iDeal' }
    ],

    footer: { // 页脚 配置
      message: "创建于2024年4月29日", // 文本
      // copyright: "@ - JiDeal", // 版权声明
    },
    docFooter: { // 上一页/下一页链接配置
      prev: '上一页',
      next: '下一页'
    },
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true, // 为每个代码块启用行号
  },
  lastUpdated: true, // 最后更新时间
})
