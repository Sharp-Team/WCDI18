import Vue from 'vue'
import io from 'socket.io-client'
import SKIO from '~/model/clientIO'

const socket = io(process.env.WS_URL)
Vue.prototype.$io = new SKIO()

export default socket
