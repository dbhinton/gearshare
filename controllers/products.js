const Product = require('../models/product');
// const User = require('../models/user');


module.exports = {
    index,
    new: newProduct,
    create,
    show
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
            title: productDocument.name
        })

    }catch(err){
        res.send(err)
    }
    
}

function newProduct(req, res){
    res.render("products/new")
    }


async function create(req, res ){
    try{
        const productDocument = await Product.create()
    }catch{
        res.send(err)
    }

    
}
