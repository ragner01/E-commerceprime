const User = require('../models/Users')
const CryptoJs = require('crypto-js')

const handleLogin = async (req,res) => {
    const { user,pwd } = req.body
    if (!user ||!pwd) return res.status(401).json("Field cannot be empty")
    try {
        const foundUser = await User.findOne({ username: user}).exec()
        if (!foundUser) return res.status(401).json("Invalid username or password")
        const decryptPwd = CryptoJs.AES.decrypt(foundUser.password,process.env.HASHEDPWD).toString(CryptoJs.enc.utf8)
        if (pwd !== decryptPwd) {
        return res.status(401).json("Invalid  username or password")
        }
        const {password, ...others} = foundUser._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
        
    }
}
module.exports = {handleLogin}