const User = require('../models/user')

module.exports = {
    home
}

function home(req, res, next){
    console.log(req.user, "<--- req user")
    console.log(req.query)
    res.render('home/index', {
        tabName: "GearShare"
    })
}