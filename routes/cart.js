var router = require('express').Router()
const cartCtrl = require('../controllers/cart')

router.get('/cart/:id', cartCtrl.show)
router.post('/cart/:id', cartCtrl.addToCart);

module.exports = router;