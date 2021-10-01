const Product = require('../models/product');
// const User = require('../models/user');


module.exports = {
    index
}

async function index(req, res){
    try{
        const productsDocuments = await Product.find({});        
        console.log(productsDocuments)
        res.render("products/index", {
            products: productsDocuments,
            title: "Products"
        })
    } catch(err){
        res.send(err)
    }
}

// function newProduct(req, res){

// }

// function show(req, res){
    
// }

// function create(req, res){
    
// }
