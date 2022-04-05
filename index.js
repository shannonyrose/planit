const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const toDoItem = require('./models/toDoItem');
const toDoList = require('./models/toDoList');
const Project = require('./models/Project');
const path = require('path');
const methodOverride = require('method-override');
const { findById, findByIdAndDelete } = require('./models/toDoItem');
const morgan = require('morgan');
const req = require('express/lib/request');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/planit', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection is open');
    })
    .catch(err => {
        console.log("MongoDB connection is not open");
        console.log(err);
    })

app.get('/todo', async (req, res) => {
    const foundToDoItem = await toDoItem.find({});
    const foundProject = await Project.find({});    
    console.log(foundToDoItem)
    res.render('index', { foundToDoItem, foundProject });
})

app.get('/projects', async (req, res) => {
    const foundToDoItem = await toDoItem.find({});
    const foundProject = await Project.find({});
    res.render('projects', {foundProject, foundToDoItem})
})

app.get('/projects/:id', async (req, res) => {
    const {id} = req.params;
    const foundProject = await Project.find({}); 
    const foundProjectById = await Project.findById(id).populate('toDoLists').populate('toDoLists.toDoItems')
    console.log(foundProjectById);
    const foundToDoItem = await toDoItem.find({});
    res.render('projectDetails', {foundProject, foundProjectById, foundToDoItem})
})

app.get('/', async (req, res) => {
    res.render('login');
})

app.post('/todo', async (req, res) => {
    const { newToDo } = req.body;
    console.log(newToDo);
    toDoItem.create({content: `${newToDo}`});
    res.redirect('/projects/:id');
})

app.get('/todo/edit/:id', async (req, res) => {
    const {id} = req.params;
    const foundToDoItem = await toDoItem.find({});
    const foundToDoItemID = await toDoItem.findById(id);
    res.render('edit', { foundToDoItem, foundToDoItemID });
})

app.patch('/todo/edit/:id', async (req, res) => {
    const {id} = req.params;
    const foundToDoItem = await toDoItem.findById(id);
    foundToDoItem.content = `${req.body.content}`;
    foundToDoItem.save();
    res.redirect('/projects/:id');
})

app.delete('/todo/:id', async (req, res) => {
    const id = req.params.id;
    await toDoItem.findByIdAndDelete(id);
    res.redirect('/projects/:id');
})

app.use((req, res) => {
    res.status(404).send('Not found!')
})
app.listen(3000, () => {
    console.log(`Listening on ${port}`);
});




