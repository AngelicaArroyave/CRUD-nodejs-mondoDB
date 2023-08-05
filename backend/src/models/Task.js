const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('Task', taskSchema, 'tasks')