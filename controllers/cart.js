const Cart = require('../models/cart')
const Product = require('../models/product')

module.exports = {
    show,
    addToCart
}

async function show(req, res){
    try{
        const cartDocument = await Cart.findById(req.params.id);
        console.log(cartDocument, "<---cart document");
        res.render('cart/checkout')

    }catch(err){
        res.send(err)
    }
    
}

async function addToCart(req, res){
    try{ 
        const addedProduct = await Product.findById(req.params.id)
        Cart.save(addedProduct);
    }catch(err){
        res.send(err)

    }
}


