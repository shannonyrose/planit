const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const toDoItem = require('./models/toDoItem');
const toDoList = require('./models/toDoList');
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
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

// READ pinned to-do lists (List View)
app.get('/dashboard', async (req, res) => {
    const foundToDoList = await toDoList.find({pinned: 'true'});
    const foundToDoItem = await toDoItem.find({});
    res.render('index', { foundToDoList, foundToDoItem});
})

// Temporary route to allow login button to work without displaying form info in URL
app.post('/dashboard', async (req, res) => {
    res.redirect('/dashboard');
})

// READ settings
app.get('/settings', async (req, res) => {
    res.render('settings');
})

// CREATE to-do list (Grid View)
app.post('/todolists/grid', async (req, res) => {
    const { newToDoList } = req.body;
    const createdToDoList = await toDoList.create({title: `${newToDoList}`});
    await createdToDoList.save();
    res.redirect('/todolists/grid');
})

// READ to-do list & to-do items (Grid View)
app.get('/todolists/grid', async (req, res) => {
    const foundToDoList= await toDoList.find({});
    const foundToDoItem = await toDoItem.find({});
    res.render('gridView', { foundToDoList, foundToDoItem });
})

// UPDATE to-do list title (Grid View)
app.patch('/todolists/grid/:id', async (req, res) => {
    const id = req.params.id;
    const toDoListTitle = req.body.newToDoListTitleInput;
    const foundToDoList = await toDoList.findById(id);
    foundToDoList.title = toDoListTitle;
    foundToDoList.save();
    res.redirect('/todolists/grid');
})

// DELETE to-do list (Grid View)
app.delete('/todolists/grid/:id', async (req, res) => {
    const id = req.params.id;
    await toDoList.findByIdAndDelete(id);
    await toDoItem.deleteMany({toDoList: {_id: id}});
    res.redirect('/todolists/grid');
})

// CREATE to-do item (Grid View)
app.patch('/todolists/grid/:id/todoitems', async (req, res) => {
    const id = req.params.id;
    const { newToDo } = req.body;
    const createdToDo = await toDoItem.create({content: `${newToDo}`, toDoList: {_id: id}}); 
    createdToDo.save();
    res.redirect('/todolists/grid');
})

// UPDATE to-do item (Grid View)
app.patch('/todolists/grid/:id/todoitems/:id', async (req, res) => {
    const id = req.params.id;
    const { updateToDoInput } = req.body;
    const foundToDoItem = await toDoItem.findById(id);
    foundToDoItem.content = updateToDoInput;
    foundToDoItem.save();
    res.redirect('/todolists/grid');
})

// DELETE to-do item (Grid View)
app.delete('/todolists/grid/:id/todoitems/:id', async (req, res) => {
    const id = req.params.id;
    await toDoItem.findByIdAndDelete(id);
    res.redirect('/todolists/grid');
})

// CREATE to-do list (List View)
app.post('/todolists', async (req, res) => {
    const { newToDoList } = req.body;
    const createdToDoList = await toDoList.create({title: `${newToDoList}`});
    await createdToDoList.save();
    res.redirect('/todolists');
})

// READ to-do list & to-do items (List View)
app.get('/todolists', async (req, res) => {
    const foundToDoList= await toDoList.find({});
    const foundToDoItem = await toDoItem.find({});
    res.render('viewToDoLists', { foundToDoList, foundToDoItem });
})

// UPDATE to-do list pinned status
app.post('/todolists/:id', async (req, res) => {
    const id = req.params.id;
    const isPinned = req.body.isPinned;
    const foundToDoList = await toDoList.findById(id);
    foundToDoList.pinned = isPinned;
    foundToDoList.save();
    res.redirect('/dashboard');
})

// UPDATE to-do list title (List View)
app.patch('/todolists/:id', async (req, res) => {
    const id = req.params.id;
    const toDoListTitle = req.body.newToDoListTitleInput;
    const foundToDoList = await toDoList.findById(id);
    foundToDoList.title = toDoListTitle;
    foundToDoList.save();
    res.redirect('/todolists');
})

// DELETE to-do list (List View)
app.delete('/todolists/:id', async (req, res) => {
    const id = req.params.id;
    await toDoList.findByIdAndDelete(id);
    await toDoItem.deleteMany({toDoList: {_id: id}});
    res.redirect('/todolists');
})

// CREATE to-do items (List View)
app.patch('/todolists/:id/todoitems', async (req, res) => {
    const id = req.params.id;
    const { newToDo } = req.body;
    const createdToDo = await toDoItem.create({content: `${newToDo}`, toDoList: {_id: id}}); 
    createdToDo.save();
    res.redirect('/todolists');
})

// UPDATE to-do items (List View)
app.patch('/todolists/:id/todoitems/:id', async (req, res) => {
    const id = req.params.id;
    const { updateToDoInput } = req.body;
    const foundToDoItem = await toDoItem.findById(id);
    foundToDoItem.content = updateToDoInput;
    foundToDoItem.save();
    res.redirect('/todolists');
})

// DELETE to-do items (List View)
app.delete('/todolists/:id/todoitems/:id', async (req, res) => {
    const id = req.params.id;
    await toDoItem.findByIdAndDelete(id);
    res.redirect('/todolists');
})


app.get('/', async (req, res) => {
    res.render('login');
})

app.use((req, res) => {
    res.status(404).send('Not found!')
})

app.listen(3000, () => {
    console.log(`Listening on ${port}`);
});
