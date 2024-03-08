const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')

router.route('/:id')
.put(userController.updateUser)
module.exports = router