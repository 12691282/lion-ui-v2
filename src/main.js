import { createApp } from 'vue'
import router from '@/router'
import App from '@/App'

//直接导入js
import '@/router/routerFilter'

const app = createApp(App)

app.use(router)

app.mount('#app')


