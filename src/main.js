import { createApp } from 'vue'
import router from '@/router'
import App from '@/App'

//导入element ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// import '@/assets/style/global.scss' //全局css

//直接导入js
import '@/router/routerFilter'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

 