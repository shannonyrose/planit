const mongoose = require('mongoose');
const { Schema } = mongoose;

const toDoSchema = new Schema({
    date: {
        type: Date
    },
    category: {
        type: String
    },
    content: {
        type: String
    },
    toDoList: { type: Schema.Types.ObjectId, ref: 'toDoList' }
})

const toDoItem = mongoose.model('toDoItem', toDoSchema);

module.exports = toDoItem;