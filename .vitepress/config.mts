import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ZhiYanDoc/",
  title: "织言",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '服务条款', link: '/TermOfUse' },
      { text: '隐私政策', link: '/Privacy' }
    ],

    footer: {
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2023028894号-4A</a> Copyright © 2023 Ge Peng'
    }
  }
})
