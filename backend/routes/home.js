import express from 'express'

const router = express.Router()

/* GET index page. */
router.get('/api/user', (req, res, next) => {
  // res.send('respond with a resource')
  const io = req.socket
  io.emit('fromserver', 'routing works')
  console.log(res.locals.user)
  res.json([{
  id: 1,
  username: "samsepi0l"
}, {
  id: 2,
  username: "D0loresH4ze"
}]);
});


router.get('/channel/:channel', (req, res, next) => {
  console.log('hit')
  res.send({txt:req.params})
})

export default router;
