const express = require("express")
const TaskModel = require("../models/task.model");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await TaskModel.find({});

        return res.status(200).send(tasks);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await TaskModel.findById(taskId);
        if (!task) {
            return res.status(404).send('task nao encontrada');
        }
        return res.status(200).send(task);
    }
    catch (error) {
        return res.status(500).send(error.message)
    }

})
router.post('/', async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();

        return res.status(201).send(newTask);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})
router.patch('/:id', async (req, res) => {
    try {

        const taskId = req.params.id;
        const taskData = req.body;
        const taskToUpdate = await TaskModel.findById(taskId)
        const allowedUpdate = ['isCompleted'];
        const requestedUpdates = Object.keys(req.body);

        for (update of requestedUpdates) {
            if (allowedUpdate.includes(update)) {
                taskToUpdate[update] = taskData[update]
            }
            else {
                return res.status(500).send('Um ou mais campos inseridos nao sao editaveis')
            }
        }

        await taskToUpdate.save()
        return res.status(200).send(taskToUpdate);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
})
router.delete('/:id', async (req, res) => {
    const taskId = req.params.id;
    await TaskModel.findByIdAndDelete(taskId)
    return res.status(200).send(`task id ${taskId} deleted!!!`);
})

module.exports = router