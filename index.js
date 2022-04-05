const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const toDoItem = require('./models/toDoItem');
const path = require('path');
const methodOverride = require('method-override');
const { findById, findByIdAndDelete } = require('./models/toDoItem');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

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
    console.log(foundToDoItem)
    res.render('index', { foundToDoItem });
})

app.get('/', async (req, res) => {
    res.render('login');
})

app.post('/todo', async (req, res) => {
    const { newToDo } = req.body;
    console.log(newToDo);
    toDoItem.create({content: `${newToDo}`});
    res.redirect('/todo');
})

app.get('/todo/edit/:id', async (req, res) => {
    const foundToDoItem = await toDoItem.find({});
    res.render('edit', { foundToDoItem });
})

app.patch('/todo/edit/:id', async (req, res) => {
    const {id} = req.params;
    const foundToDoItem = await toDoItem.findById(id);
    foundToDoItem.content = `${req.body.content}`;
    foundToDoItem.save();
    res.redirect('/todo');
})

app.delete('/todo/:id', async (req, res) => {
    const id = req.params.id;
    await toDoItem.findByIdAndDelete(id);
    res.redirect('/todo');
})


app.listen(3000, () => {
    console.log(`Listening on ${port}`);
});




