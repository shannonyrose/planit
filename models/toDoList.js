const mongoose = require('mongoose');
const { Schema } = mongoose;

const toDoListSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    category: {
        type: String,
        color: String
    },
    pinned:{
        type: String
    }
})

const toDoList = mongoose.model('toDoList', toDoListSchema);

module.exports = toDoList;