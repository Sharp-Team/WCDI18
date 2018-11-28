let io
let mapSocket
let customers = []
let workers = []
let notifications = []
let notificationsWorker = []
let notificationsCustomer = []
let directions = []
let username

exports.initGame = function(sio, socket) {
  io = sio
  mapSocket = socket
  mapSocket.emit('connected', {
    message: 'You are connected!'
  })

  io.emit('updateCustomers', {
    customers
  })

  io.emit('updateWorkers', {
    workers
  })

  io.emit('updateNotificationWorker', {
    notificationsWorker
  })

  io.emit('updateNotificationCustomer', {
    notificationsCustomer
  })

  io.emit('updateCustomers', {
    customers
  })

  io.emit('updateWorkers', {
    workers
  })

  io.emit('updateDirections', {
    directions
  })

  // Events
  mapSocket.on('sendNotificationWorker', sendNotificationWorker)
  mapSocket.on('sendNotificationCustomer', sendNotificationCustomer)

  mapSocket.on('getNotificationWorker', getNotificationWorker)
  mapSocket.on('getNotificationCustomer', getNotificationCustomer)

  mapSocket.on('sendCustomerAcceptDeal', sendCustomerAcceptDeal)

  mapSocket.on('customerOnline', customerOnline)
  mapSocket.on('customerOffline', customerOffline)
  mapSocket.on('getCustomerOnline', getCustomerOnline)

  mapSocket.on('workerOnline', workerOnline)
  mapSocket.on('workerOffline', workerOffline)
  mapSocket.on('getWorkerOnline', getWorkerOnline)

  mapSocket.on('sendDirection', sendDirection)
  mapSocket.on('getDirection', getDirection)
}

function sendNotificationWorker(data) {
  notificationsWorker.push(data)
  io.emit('updateNotificationWorker', {
    notificationsWorker
  })
}

function sendNotificationCustomer(data) {
  notificationsCustomer.push(data)
  for (let i = notificationsWorker.length - 1; i >= 0; i--) {
    if (
      notificationsWorker[i].username === data.username &&
      notificationsWorker[i].title === data.career
    ) {
      notificationsWorker.splice(i, 1)
    }
  }
  io.emit('updateNotificationCustomer', {
    notificationsCustomer
  })
  io.emit('updateNotificationWorker', {
    notificationsWorker
  })
}

function getNotificationWorker() {
  io.emit('updateNotificationWorker', {
    notificationsWorker
  })
}

function getNotificationCustomer() {
  io.emit('updateNotificationCustomer', {
    notificationsCustomer
  })
}

function sendCustomerAcceptDeal(data) {
  for (let i = notificationsCustomer.length - 1; i >= 0; i--) {
    if (
      notificationsCustomer[i].username === data.username &&
      notificationsCustomer[i].career === data.career
    ) {
      notificationsCustomer.splice(i, 1)
    }
  }
  io.emit('updateNotificationCustomer', {
    notificationsCustomer
  })
}

function customerOnline(data) {
  customers.push(data)
  io.emit('updateCustomers', {
    customers
  })
}

function customerOffline(data) {
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i].username === data.username) {
      customers.splice(i, 1)
    }
  }
  for (let i = directions.length - 1; i >= 0; i--) {
    if (directions[i].username === data.username) {
      directions.splice(i, 1)
    }
  }
  io.emit('updateCustomers', {
    customers
  })
}

function getCustomerOnline() {
  io.emit('updateCustomers', {
    customers
  })
}

function workerOnline(data) {
  workers.push(data)
  io.emit('updateWorkers', {
    workers
  })
  for (let i = directions.length - 1; i >= 0; i--) {
    if (directions[i].username === data.username) {
      directions.splice(i, 1)
    }
  }
}

function workerOffline(data) {
  for (let i = workers.length - 1; i >= 0; i--) {
    if (workers[i].username === data.username) {
      workers.splice(i, 1)
    }
  }
  for (let i = directions.length - 1; i >= 0; i--) {
    if (directions[i].username === data.username) {
      directions.splice(i, 1)
    }
  }
  io.emit('updateWorkers', {
    workers
  })
}

function getWorkerOnline() {
  io.emit('updateWorkers', {
    workers
  })
}

function sendDirection(data) {
  directions.push(data)
  io.emit('updateDirections', {
    directions
  })
}

function getDirection() {
  io.emit('updateDirections', {
    directions
  })
}
