var router = require('express').Router()
const productsCtrl = require('../controllers/products')

// Product Controllers
router.get('/products', productsCtrl.index)
router.get('/products/new', productsCtrl.new);
router.get('/products/:id', productsCtrl.show);
router.post('/products', productsCtrl.create);



module.exports = router;