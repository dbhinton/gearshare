const Product = require('../models/product');
const Cart = require('../models/cart')
// const User = require('../models/user');


module.exports = {
    index,
    new: newProduct,
    create,
    show,
    update
}


async function index(req, res){
    try{
        const productDocument = await Product.find({});        
        console.log(productDocument)
        res.render("products/index", {
            products: productDocument,
            title: "Products"
        })
    } catch(err){
        res.send(err)
    }
}



async function show(req, res){
    try{
        const productDocument = await Product.findById(req.params.id);
        console.log(productDocument, "<---show product document");
        res.render('products/show', {
            product: productDocument,
            title: "Product Detail"
        })

    }catch(err){
        res.send(err)
    }
    
}

function newProduct(req, res){
    res.render("products/new", {title: "New Product"})
    }


async function create(req, res ){
    try{
        const productDocument = await Product.create(req.body)
        res.redirect(`/products/new`)
    }catch{
        next(err);
    }

    
}

function update(req, res) {
    Product.findById(req.params.id)
    .then(product => {
      res.redirect("products/index", {
        product
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("products/index")
    })
  }