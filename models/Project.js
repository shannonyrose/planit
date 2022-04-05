const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    category: {
        type: String
    },
    toDoLists: [{type: Schema.Types.ObjectId, ref: 'toDoList'}]
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;