const Product = require('../models/product')

module.exports = {
    create
}

async function create(req,res){
    try{
        const productDocument = await Product.findById(req.params.id)
        console.log(req.body, "<<--req.body")
        // console.log(productDocument, "<<--prod doc")
        productDocument.reviews.push(req.body)
        console.log(productDocument, 'prod doc')
        console.log(req.body, "<<--req.body")
        console.log(req.params, "<--req params")
        productDocument.save(function(err){
            res.redirect(`/products/${req.params.id}`)
        })

    }catch(err) {
        res.send(err)
    }
}
