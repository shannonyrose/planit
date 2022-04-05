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
        type: String
    },
    toDoItems: [{type: Schema.Types.ObjectId, ref: 'toDoItem'}]
})

const toDoList = mongoose.model('toDoList', toDoListSchema);

module.exports = toDoList;