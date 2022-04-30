const express = require('express')
const router = express.Router()

// Importa o controlller correspondente
const controller = require('../controllers/login')

router.post('/', controller.login)


module.exports = router