const express = require('express');
const dotenv = require("dotenv");
const TaskModel = require('./src/models/task.model')

const connectToDatabase = require("./src/database/mongoose.database")

dotenv.config();
const app = express();


connectToDatabase();
app.get('/tasks', async (req, res) => {
    const tasks = await TaskModel.find({})
    res.status(200).send(tasks)
});

app.listen(3000, () => console.log('Listening on port 3000!'));