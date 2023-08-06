const express = require('express')
const app = express()
const morgan = require('morgan')

require('./database')

// Permite convertir los datos del servidor a un objeto json que se pueda manipular
app.use(express.json())
// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// Permite acceder al API de routes de los users
app.use('/api', require('./routes/users.routes'))
app.use('/api', require('./routes/tasks.routes'))

app.listen(3000)
console.log('Server on port', 3000);