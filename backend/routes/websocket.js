const websocket = (io) => {

  io.on('connect', (socket) => {
    console.log('New socket connection : ', socket.id)

    socket.on('chat', (data) => {
      console.log('socket')
      console.log(data)
    })

    io.emit('fromserver', 'hey')
  })



}

export default websocket
