import {defineComponent, createApp} from 'vue'

const App = defineComponent({
  name: "App",

  setup() {
    function getDateAtLocalString(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, { dateStyle: 'long'})
    }

    return {
      getDateAtLocalString,
    }
  },

  template: `<time>Сегодня {{getDateAtLocalString(new Date)}}</time>`
})


const app = createApp(App)
const vm = app.mount('#app')

window.vm = vm

