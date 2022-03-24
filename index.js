const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const toDoList = require('./models/toDoList');
mongoose.connect('mongodb://localhost:27017/planit', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection is open');
    })
    .catch(err => {
        console.log("MongoDB connection is not open");
        console.log(err);
    })

app.get('/', (req, res) => {
    res.send('Test');
})

app.listen(3000, () => {
    console.log(`Listening on ${port}`);
});

