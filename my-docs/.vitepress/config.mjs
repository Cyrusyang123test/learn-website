import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '杨杨的网站',
  description: '用 VitePress 搭建的第一个网站',
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '学习笔记', link: '/notes' },
    ],
    sidebar: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '学习笔记', link: '/notes' },
    ],
    footer: {
      message: 'Learning · Building · Growing',
      copyright: 'Copyright © 2026 杨杨',
    },
  },
})
