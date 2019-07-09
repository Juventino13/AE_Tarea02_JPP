const mongoose = require ('mongoose'); 

let brandSchema = new mongoose.Schema({
    brand : { 
        require: true,
        type:String 
    }
}); 

const brandModel = mongoose.model = mongoose.model ('Brand',brandSchema, "Brands");
module.exports = brandModel;