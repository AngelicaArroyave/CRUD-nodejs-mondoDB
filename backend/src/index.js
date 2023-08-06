import express from 'express';
import morgan from 'morgan';
import './database.js'
import { userRouters } from './routes/users.routes.js';
import taskRouters from './routes/tasks.routes.js';

const app = express()

// Permite convertir los datos del servidor a un objeto json que se pueda manipular
app.use(express.json())
// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// Permite acceder al API de routes de los users
app.use('/api', userRouters)
app.use('/api', taskRouters)

app.listen(3000)
console.log('Server on port', 3000);