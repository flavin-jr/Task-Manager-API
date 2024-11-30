const express = require('express');
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database")

dotenv.config();
const app = express();


connectToDatabase();
app.get('/', (req, res) => {
    res.status(200).send('testando sa porra')
});

app.listen(3000, () => console.log('Listening on port 3000!'));