import express from 'express';
import app from '../app'

const router = express.Router();

/* GET index page. */
router.get('/api/user', (req, res, next) => {
  // res.send('respond with a resource');
  res.json([{
  id: 1,
  username: "samsepi0l"
}, {
  id: 2,
  username: "D0loresH4ze"
}]);
});

export default router;
