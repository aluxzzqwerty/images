import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'
import AuthHandler from './components/AuthHandler.vue'
import UploadForm from './components/UploadForm.vue'
import ImageList from './components/ImageList.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/upload', component: UploadForm },
        { path: '/', component: ImageList },
    ],
    history: createWebHistory("/images")
})


createApp(App).use(router).use(store).mount('#app');
