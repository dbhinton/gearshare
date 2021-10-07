var router = require('express').Router()
const reviewsCtrl = require('../controllers/reviews')

router.post('/products/:id/reviews', reviewsCtrl.create)
router.put('/products/:pid/reviews/:rid', reviewsCtrl.update)
router.delete('/products/:pid/reviews/:rid', reviewsCtrl.deleteReview)

module.exports = router;