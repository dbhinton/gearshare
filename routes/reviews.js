var router = require('express').Router()
const reviewsCtrl = require('../controllers/reviews')

router.post('/products/:id/reviews', reviewsCtrl.create)
router.put('/products/:pid/reviews/:rid', reviewsCtrl.updateReview)
router.delete('/products/:pid/reviews/:rid', reviewsCtrl.deleteReview)

module.exports = router;