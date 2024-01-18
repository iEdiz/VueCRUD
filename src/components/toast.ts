import { createApp } from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

const toastApp = createApp({})
toastApp.use(VueToast, {
    position: 'top-right'
})
const $toast = toastApp.config.globalProperties.$toast

export default $toast
