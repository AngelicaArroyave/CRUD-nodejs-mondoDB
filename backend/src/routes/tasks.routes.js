import { Router } from 'express'
import { verifyToken } from './users.routes.js'
import Task from '../models/Task.js'

const taskRouters = Router()

// Obtener la lista de tareas públicas, por el momento no hay diferencia entre las tareas
taskRouters.get('/tasks', async (request, response) => {
    const tasks = await Task.find().lean()
    
    response.json(tasks)
})

// Para obtener todas las tareas de la base de datos
taskRouters.get('/private-tasks', verifyToken, async (request, response) => {
    const tasks = await Task.find().lean()
    
    response.json(tasks)
})

// Para agregar tareas en la base de datos
taskRouters.post('/private-tasks/add', async (request, response) => {
    const task = Task(request.body)
    
    await task.save()
    response.redirect('/')
})

// Para modificar una tarea en la base de datos
taskRouters.put('/private-tasks/edit/:id', async (request, response) => {
    await Task.findByIdAndUpdate(request.params.id, request.body)
    response.redirect('/')
})

// Para eliminar una tarea de la base de datos
taskRouters.delete('/private-tasks/delete/:id', async (request, response) => {
    await Task.findByIdAndDelete(request.params.id)
    response.redirect('/')
})

taskRouters.put('/private-tasks/updateProperty/:id', async (request, response) => {
    await Task.findByIdAndUpdate(request.params.id, { done: !request.body.done })
    response.redirect('/')
})

export default taskRouters