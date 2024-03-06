const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    UserId: string,
        products: [
            {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default:1
            }
        }

        ]
        
    }, {timestamps: true})
    




const cartModel = mongoose.model('Cart', cartSchema)
module.exports = cartModel