import DefaultTheme from 'vitepress/theme'
import DemoPreview from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

// 站点主页，Logo图片样式修改
import './styles/HomeHeroImage.css'
// 代码块相关样式
import './styles/CodeStyle.css'
// 重写相关样式
import './styles/OverwriteStyle.css'

import DemoContainer from '../components/DemoContainer.vue'

import { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('DemoContainer', DemoContainer)
    app.use(DemoPreview)
  }
}
