import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('index');
});

export default router;
