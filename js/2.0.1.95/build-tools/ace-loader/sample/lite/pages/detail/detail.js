var router = require('@system.router')
export default {
  data: {},
  nextPage () {
    router.replace({ uri: 'pages/chart/index' })
  },
  onInit () {
    console.log('onInit called...')
  },
  onReady () {
    console.log('onReady called...')
  },
  onShow () {
    console.log('onShow called...')
  },
  onDestroy () {
    console.log('onDestroy called...')
  }
}
