import { verifyToken } from './users.routes.js'
import { Router } from 'express'

const taskRouters = Router()

// Obtener la lista de tareas públicas
taskRouters.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'Nam vitae aliquet leo. Donec purus felis, ullamcorper a porttitor et, pharetra et dolor',
            date: '2019-11-06T15:50:18.921Z'
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'Ullamcorper libero pretium iaculis. Duis sollicitudin leo nec arcu efficitur, at mollis urna cursus',
            date: '2019-11-06T15:50:18.921Z'
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'Donec pellentesque sollicitudin tortor. Phasellus fermentum laoreet turpis, eget porttitor erat viverra in',
            date: '2019-11-06T15:50:18.921Z'
        }
    ])
})

taskRouters.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Private task one',
            description: 'Morbi lacinia finibus consectetur. Vestibulum ullamcorper metus in dui feugiat ultrices non id eros',
            date: '2019-11-06T15:50:18.921Z'
        },
        {
            _id: 2,
            name: 'Private task two',
            description: 'Suspendisse volutpat auctor felis vestibulum tincidunt',
            date: '2019-11-06T15:50:18.921Z'
        },
        {
            _id: 3,
            name: 'Private task three',
            description: 'Etiam dictum dui ultrices facilisis feugiat. Proin libero dolor, consectetur nec efficitur sit amet, blandit quis sapien',
            date: '2019-11-06T15:50:18.921Z'
        }
    ])
})

export default taskRouters