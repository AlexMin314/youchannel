import express from 'express'

import homeRouter from './home'
import socketRouter from './websocket'

const index = (app, io) => {
  socketRouter(io)
  app.use('/', homeRouter)
}

export default index
