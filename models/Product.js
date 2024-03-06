const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title:{
        type: 'string',
        unique: true,
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    
    },
    size:{type: string},
    color:{type: string},
    price:{type: Number, required: true},
    size:{type: Array},


    
}, {timestamps: true})



const ProductModel = mongoose.model('Product', ProductSchema)
module.exports = ProductModel