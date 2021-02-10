const express = require('express')
const router = express.Router()
const {index,contactos,faqs,nosotros,admin,processAdmin} = require('../controllers/mainController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/', index)
router.get('/nosotros', nosotros)
router.get('/contactos', contactos)
router.get('/preguntas-frecuentes', faqs)
router.get('/ingresar', admin)
router.get('/admin', adminMiddleware, processAdmin)



module.exports = router