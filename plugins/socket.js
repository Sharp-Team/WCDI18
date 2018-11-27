import Vue from 'vue'
import IO from '~/model/clientIO'

Vue.prototype.$io = new IO()
