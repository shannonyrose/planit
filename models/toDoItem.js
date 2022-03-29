const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    category: {
        type: String
    },
    content: {
        type: String
    }
})

const toDoItem = mongoose.model('toDoItem', toDoSchema);

module.exports = toDoItem;