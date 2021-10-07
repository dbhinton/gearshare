const Product = require('../models/product')
const Review = require('../models/review')

module.exports = {
    create,
    update,
    deleteReview
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

// async function update(req, res){
//     Product.findById(req.params.pid, function(err, product){
//         console.log(product.reviews.id(req.params.rid), "<---prod reviews id req params review")
//         product.reviews.id(req.params.rid).create()
//         product.save(function(e){
//             res.redirect(`/products/${req.params.pid}`)
//         })
        
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

function update(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Product.findOne({'reviews.r_id': req.params.id}, function(err, product) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const reviewSubdoc = product.reviews.id(req.params.id);
      console.log(reviewSubdoc, "<____---")
      // Ensure that the comment was created by the logged in user
    //   if (!reviewSubdoc.user._id.equals(req.user._id)) return res.redirect(`/products/${product._pid}`);
      // Update the text of the comment
      reviewSubdoc.text = req.body.text;
      // Save the updated product
      product.save(function(err) {
        // Redirect back to the product's show view
        res.redirect(`/products/${product._pid}`);
      });
    });
  }
