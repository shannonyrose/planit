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

const li = new toDoList({
    date: '2022-03-24',
    category:'general',
    toDoItems: [{
        content: "go to store",
    }, {
        content: "eat lunch"
    }]
});

li.save().then(li => {
    console.log(li);
})
.catch(err => {
    console.log(err);
})
