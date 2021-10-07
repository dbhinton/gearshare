const Product = require('../models/product')
const Review = require('../models/review')

module.exports = {
    create,
    updateReview,
    deleteReview
}

async function create(req,res){
    try{
        const productDocument = await Product.findById(req.params.id)
        console.log(req.user, "***req body***")
        productDocument.user._id = req.user._id
        console.log(productDocument, "<<--req.body")
        // console.log(productDocument, "<<--prod doc")
        productDocument.reviews.push(req.body)
        console.log(productDocument, '<-----**prod doc')
        productDocument.save(function(err){
            res.redirect(`/products/${req.params.id}`)
        })

    }catch(err) {
        res.send(err)
    }
}

// function updateReview(req, res){
//     Product.findById(req.params.pid, function(err, product){
//         if(!err){
//             if(!product){
//                 res.send(err)
//             }
//         }else{
//             console.log(product.reviews.id(req.params.rid), "<---prod reviews id req params review")
//             console.log(req.params, "req body <----")
//             product.reviews.id(req.params.id).update()
//             // product.reviews.id(req.body.rid).rating = req.body.rating
//             product.save(function(e){
//                 res.redirect(`/products/${req.params.pid}`)
//             })      
//         }       
//     })
// }

function deleteReview(req, res){
    console.log("running delete review")
    // try  {
        // const productDocument = await Product.findById(req.params.pid)
        // const reviewSubDoc = productDocument.reviews.id(req.params.rid)
        Product.findById(req.params.pid, function(err, product){
            console.log("product reviews", product.reviews.id(req.params.rid))
            product.reviews.id(req.params.rid).remove()
            product.save(function(e){
                res.redirect(`/products/${req.params.pid}`)
            })
            // parent.children.id(_id).remove();      
        })
}

function updateReview(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    console.log(req.params, "<-----req params")
    console.log(req.body, "<----req body")
    Product.findById(req.params.pid, function(err, product) {
        console.log(err, "this is err")
        console.log(product, "<----this is the product")
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const reviewSubdoc = product.reviews.id(req.params.rid);
      console.log(reviewSubdoc, "<____---")
      // Ensure that the comment was created by the logged in user
    //   if (!reviewSubdoc.user._id.equals(req.user._id)) return res.redirect(`/products/${product._pid}`);
      // Update the text of the comment
      reviewSubdoc.content = req.body.content;
      console.log(reviewSubdoc, "updated reviewSubdoc")
      // Save the updated product
      product.save(function() {
        // Redirect back to the product's show view
        res.redirect(`/products/${product._id}`);
      });
    });
  }
