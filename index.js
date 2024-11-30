const express = require('express');
const dotenv = require("dotenv");
const TaskModel = require('./src/models/task.model')

const connectToDatabase = require("./src/database/mongoose.database")

dotenv.config();
const app = express();

app.use(express.json())
connectToDatabase();
app.get('/tasks', async (req, res) => {
    const tasks = await TaskModel.find({})
    res.status(200).send(tasks)
});

app.post('/tasks', async (req, res) => {
    const newTask = new TaskModel(req.body);
    await newTask.save();
    res.status(201).send(newTask);
})

app.listen(3000, () => console.log('Listening on port 3000!'));