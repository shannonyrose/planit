const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    title: {
        type: String
    },
    category: {
        type: String
    },
    toDoItems: [{
        content: String
    }]
})

const toDoList = mongoose.model('toDoList', toDoListSchema);

module.exports = toDoList;