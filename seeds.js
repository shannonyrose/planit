const mongoose = require('mongoose');
const toDoItem = require('./models/toDoItem');
const toDoList = require('./models/toDoList');
const Project = require('./models/Project');

mongoose.connect('mongodb://localhost:27017/planit', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection is open');
    })
    .catch(err => {
        console.log("MongoDB connection is not open");
        console.log(err);
    })

const testToDo = new toDoItem({
    date: '2022-04-01',
    category:'cleaning',
    content: 'wash car'
});

testToDo.save().then(testToDo => {
    console.log(testToDo);
})
.catch(err => {
    console.log(err);
})

// const makeToDoList = async function(){
//     const cleanKitchen = new toDoList({title: 'Clean the Kitchen'})
//     const washDishes = await toDoItem.findOne({content: 'wash dishes'});
//     cleanKitchen.toDoItems.push(washDishes);
//     await cleanKitchen.save();
//     console.log(cleanKitchen);
// }

// makeToDoList();


// const makeProject = async function(){
//     const cleaning = new Project({title: 'Cleaning'})
//     const cleanKitchen = await toDoList.findOne({title: 'Clean the Kitchen'});
//     cleaning.toDoLists.push(cleanKitchen);
//     await cleaning.save();
//     console.log(cleaning);
// }

// makeProject();

// const makeToDoItem = function(){
//     const task5 = new toDoItem({content: 'Wash dishes'});
//     const task6 = new toDoItem({content: 'Clean counters'});
//     const task7 = new toDoItem({content: 'Wipe stovetop'});
//     const task8 = new toDoItem({content: 'Sweep floors'});
//     // const cleanKitchen = await toDoList.findOne({title: 'Clean the Kitchen'});
//     // cleanKitchen.toDoItems.push(task1);
//     // cleanKitchen.toDoItems.push(task2);
//     // cleanKitchen.toDoItems.push(task3);
//     // cleanKitchen.toDoItems.push(task4);
//     // await cleanKitchen.save();
// }

// makeToDoItem();
