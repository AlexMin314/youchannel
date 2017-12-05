import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import Debug from 'debug'
import express from 'express'
import logger from 'morgan'
import path from 'path'
// import sassMiddleware from 'node-sass-middleware'
// import favicon from 'serve-favicon'
import http from 'http'
import Socket from 'socket.io'

// import routers
import indexRoute from './routes/index'


// create express application
export const app = express()
const debug = Debug('backend:app')
// create server
export const server = http.Server(app)
const io = Socket(server)
// register routers
indexRoute(app, io)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cookieParser())
// app.use(sassMiddleware({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true,
//   sourceMap: true
// }));
app.use(express.static(path.join(__dirname, 'public')))


/* middleware */
app.use(function (req, res, next) {
  req.socket = io
  res.locals.user = {name: 'alex'}
  next();
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});
