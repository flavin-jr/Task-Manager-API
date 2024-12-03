const TaskModel = require('../models/task.model');
const NotFoundError = require('../errors/mongodb.error')
const { notAllowedFieldsToUpdate, objectIdCastError } = require('../errors/general.error');
const { default: mongoose } = require('mongoose');
class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getTasks() {
        try {
            const tasks = await TaskModel.find({});

            return this.res.status(200).send(tasks);
        }
        catch (error) {
            return this.res.status(500).send(error.message);
        }
    }

    async getTaskById() {
        try {
            const taskId = this.req.params.id;

            const task = await TaskModel.findById(taskId);
            if (!task) {
                return NotFoundError(this.res);
            }
            return this.res.status(200).send(task);
        }
        catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return objectIdCastError(this.res);
            }
            return this.res.status(500).send(error.message)
        }
    }
    async createTask() {
        try {
            const newTask = new TaskModel(this.req.body);
            await newTask.save();

            return this.res.status(201).send(newTask);
        }
        catch (error) {
            return this.res.status(500).send(error.message);
        }
    }
    async updateTask() {
        try {

            const taskId = this.req.params.id;
            const taskData = this.req.body;
            const taskToUpdate = await TaskModel.findById(taskId);

            if (!taskToUpdate) {
                return NotFoundError(this.res);
            }

            const allowedUpdate = ['isCompleted'];
            const requestedUpdates = Object.keys(this.req.body);

            for (const update of requestedUpdates) {
                if (allowedUpdate.includes(update)) {
                    taskToUpdate[update] = taskData[update]
                }
                else {
                    return notAllowedFieldsToUpdate(this.res);
                }
            }

            await taskToUpdate.save()
            return this.res.status(200).send(taskToUpdate);
        }
        catch (error) {
            return this.res.status(500).send(error.message);
        }
    }
    async deleteTask() {
        const taskId = this.req.params.id;
        const task = await TaskModel.findByIdAndDelete(taskId)

        if (task) {

            return this.res.status(200).send(`task id ${taskId} deleted!!!`);
        }
        return this.res.status(500).send('Tarefa não encontrado')
    }
}

module.exports = TaskController;