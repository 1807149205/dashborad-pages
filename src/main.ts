// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue';
import AppVue from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './router'

const app = createApp(AppVue)

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app')
