const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const { initGame } = require('./socket')
const port = process.env.PORT || 4500

const app = express()

const server = http.createServer(app)
const io = socketIO(server)
server.listen(port)

io.sockets.on('connection', function(socket) {
  initGame(io, socket)
})
