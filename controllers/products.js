const Product = require('../models/product');
const User = require('../models/user');


module.exports = {
    index,
    new: newProduct,
    create,
    show
    

}

async function index(req, res){
    try{
        const userDocuments = await User.find({});
        res.render('')
    }catch(err){
        res.send(err)
    }
}

function newProduct(req, res){

}

function show(req, res){
    
}

function create(req, res){
    
}
