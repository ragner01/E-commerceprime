const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: 'string',
        required: true,
        unique: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    password:{
        type: 'string',
        required: true,
    
    },
    image:{
        type: 'string',
        
    },
    isAdmin:{
        type: 'Boolean',
        default: false,
        
    },
}, {timestamps: true})



const userModel = mongoose.model('User', userSchema)
module.exports = userModel