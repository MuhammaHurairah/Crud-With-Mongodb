const mongoose = require('mongoose');

const productschema= new mongoose.Schema({
    name : String,
    price:Number,
    Brand : String,
    category: String

})

module.exports = mongoose.model("employees", productschema);
