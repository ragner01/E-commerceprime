const User = require('../models/Users')
const Crypto = require('crypto-js')

const handleRegister = async (req,res) => {
    const { user,email,image,pwd} =req.body
    if (!user|| !email|| !image|| !pwd) return res.status(401).json("Field cannot be empty")
    try {
        const encryptpwd = Crypto.AES.encrypt(pwd, process.env.HASHEDPWD)
        const newUser = await User.create({
            username: user,
            email: email,
            password: encryptpwd,
            image: image,
        })
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json(`Error: $ {error.message}`)
    }
}
module.exports = {handleRegister}