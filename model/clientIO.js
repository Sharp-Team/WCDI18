import io from 'socket.io-client'

const WS_URL = process.env.WS_URL || 'http://localhost:4500'
export default class ClientIO {
  constructor() {
    this.socket = io(WS_URL)

    this.socket.on('errMess', ({ message }) => {
      alert(message)
    })
  }

  sendNotificationWorker = data => {
    this.socket.emit('sendNotificationWorker', data)
  }

  getNotificationWorker = () => {
    this.socket.emit('getNotificationWorker')
  }

  sendNotificationCustomer = data => {
    this.socket.emit('sendNotificationCustomer', data)
  }

  getNotificationCustomer = () => {
    this.socket.emit('getNotificationCustomer')
  }
}
