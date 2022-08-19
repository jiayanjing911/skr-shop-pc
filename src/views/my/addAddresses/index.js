import addAddresses from './index.vue'

export default {
    install(Vue){
        Vue.component(addAddresses.name,addAddresses)
    }
}