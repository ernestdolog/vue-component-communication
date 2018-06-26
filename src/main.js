import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    sendServerChange(serverNr) {
      this.$emit('serverWasChanged', serverNr)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
