const mongoose = require('mongoose')


const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: String,
        default: false,
    }
})

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel