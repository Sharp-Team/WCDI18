// const express = require('express')
// const http = require('http')
// const socketIO = require('socket.io')
// const { initGame } = require('./controller/game')

// const app = express()
// app.set('port', port)

// // Import and Set Nuxt.js options
// let config = require('../nuxt.config.js')
// config.dev = !(process.env.NODE_ENV === 'production')

// async function start() {
//   // Init Nuxt.js
//   const nuxt = new Nuxt(config)

//   // Build only in dev mode
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   }

//   // Give nuxt middleware to express
//   app.use(nuxt.render)

//   // Listen the server
//   let server = app.listen(port, host)
//   console.log('Server listening on http://' + host + ':' + port)
//   socketStart(server)
//   console.log('Socket.IO starts')
// }

// function socketStart(server) {
//   const io = require('socket.io').listen(server)

//   io.on('connection', socket => {
//     initGame(io, socket)
//   })
// }

// start()
