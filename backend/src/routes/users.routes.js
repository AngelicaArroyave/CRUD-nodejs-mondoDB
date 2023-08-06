const { Router } = require('express')
const router = Router()

const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => res.send('Hello world'))

// Crear un usuario/registrarse
router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    const newUser = new User({ email, password })
    await newUser.save()

    // Se guarda el id del usuario y una palabra secreta
    const token = jwt.sign({ _id: newUser._id }, 'SecretKey')
    // Para crear el token
    res.status(200).json({ token })
})

// Iniciar sesión
router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    
    // Validar que el correo electrónico exista
    if(!user) return res.status(401).send("The email doesn't exists")
    // Validar que la contraseña del email valido exista
    if(user.password !== password) return res.status(401).send('Wrong password')
    
    const token = jwt.sign({ _id: user._id }, 'SecretKey')
    
    return res.status(200).json({ token })
})

// Método para verificar la existencia del token
function verifyToken(req, res, next) {
    console.log(req.headers.authorization);
}

module.exports = {router, verifyToken}