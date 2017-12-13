const websocket = (io) => {

  // global connection events
  // if need namespace connection, I can put that into the route.
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
