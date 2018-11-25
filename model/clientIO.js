import io from 'socket.io-client'

const WS_URL = process.env.WS_URL || 'http://localhost:4500'
export default class ClientIO {
  constructor() {
    this.socket = io(WS_URL)

    this.socket.on('errMess', ({ message }) => {
      alert(message)
    })
  }

  sendNotification = data => {
    this.socket.emit('sendNotification', data)
  }

  getNotification = () => {
    this.socket.emit('getNotification')
  }
}
