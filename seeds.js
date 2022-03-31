const mongoose = require('mongoose');
const toDoItem = require('./models/toDoItem');
mongoose.connect('mongodb://localhost:27017/planit', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection is open');
    })
    .catch(err => {
        console.log("MongoDB connection is not open");
        console.log(err);
    })

const testToDo = new toDoItem({
    date: '2022-03-24',
    category:'general',
    content: 'go to the store'
});

testToDo.save().then(testToDo => {
    console.log(testToDo);
})
.catch(err => {
    console.log(err);
})
