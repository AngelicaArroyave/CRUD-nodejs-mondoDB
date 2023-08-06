import { Router } from 'express'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const userRouters = Router()

userRouters.get('/', (req, res) => res.send('Hello world'))

// Crear un usuario/registrarse
userRouters.post('/signup', async (req, res) => {
    const { email, password } = req.body
    const newUser = new User({ email, password })
    await newUser.save()

    // Se guarda el id del usuario y una palabra secreta
    const token = jwt.sign({ _id: newUser._id }, 'SecretKey')
    // Para crear el token
    res.status(200).json({ token })
})

// Iniciar sesión
userRouters.post('/signin', async (req, res) => {
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
// El token que devuelve el iniciar sesión se debe pegar en postam en los header en authorization
async function verifyToken(req, res, next) {
    try {
        if(!req.headers.authorization) return res.status(401).send('Unauhtorized request')

        const token = req.headers.authorization.split(' ')[1]
        if(token === 'null') return res.status(401).send('Unauhtorized request')

        // Se obtiene el id de la persona que inicio sesión
        const payload = jwt.verify(token, 'SecretKey')
        req.userId = payload._id
        next()
    } catch (error) {
        return res.status(401).send('Unauhtorized request')
    }
}

export { userRouters, verifyToken }