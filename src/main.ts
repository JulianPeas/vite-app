import { createApp } from 'vue'
import router from './router.ts'
import App from './App.vue'
import Antd from 'ant-design-vue'
import './index.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
// app.config.productionTip = false

app.use(router)
app.use(Antd)
app.mount('#app')
