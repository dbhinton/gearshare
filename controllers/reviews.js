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
        if(req.user){
            productDocument.reviews.push(req.body)
            productDocument.save(function(err){
                res.redirect(`/products/${req.params.id}`)
            })

        }
        // console.log(productDocument, "<<--prod doc")

    }catch(err) {
        res.send(err)
    }
}


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
    Product.findById(req.params.pid, function(err, product) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const reviewSubdoc = product.reviews.id(req.params.rid);
      console.log(reviewSubdoc, "<---review subdoc****")
      // Ensure that the comment was created by the logged in user
    //   if (!reviewSubdoc.user._id.equals(req.user._id)) return res.redirect(`/products/${product._pid}`);
      // Update the text of the comment
      reviewSubdoc.content = req.body.content;
      // Save the updated product
      product.save(function() {
        // Redirect back to the product's show view
        res.redirect(`/products/${product._id}`);
      });
    });
  }
