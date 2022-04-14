
const promptNewToDoBtn = document.getElementsByClassName('promptNewToDo');
const newToDoForm = document.getElementsByClassName('newToDoForm');
const submitNewToDoBtn = document.getElementsByClassName('submitNewToDo');
const newToDoInput = document.getElementsByClassName('newToDo');
const toDoItemContent = document.getElementsByClassName('toDoItemContent');
const newToDoPlaceHolder = document.getElementsByClassName('newToDoPlaceHolder');

// Displays and hides the form that allows users to add a new to-do item
for(let i = 0; i < promptNewToDoBtn.length; i++){
    promptNewToDoBtn[i].addEventListener('click', () => {
    newToDoPlaceHolder[i].replaceWith(newToDoForm[i]);
    if (newToDoForm[i].style.display === 'block') {
        newToDoForm[i].style.display = 'none';
    } else {
        newToDoForm[i].style.display = 'block';
    }
});
promptNewToDoBtn[i].addEventListener('submit', () => {
    newToDoForm[i].style.display = 'none';
});
}

const promptUpdateToDoBtn = document.getElementsByClassName('promptUpdateToDoBtn');
const updateToDoForm = document.getElementsByClassName('updateToDoForm');
const submitUpdatedToDoBtn = document.getElementsByClassName('submitUpdatedToDoBtn');
const updateToDoInput = document.getElementsByClassName('updateToDoInput');
const deleteToDoBtn = document.getElementsByClassName('deleteToDoBtn');
const cancelActionBtn = document.getElementsByClassName('cancelActionBtn');

// Displays and hides the form that allows users to edit individual to-do items
for(let i = 0; i < promptUpdateToDoBtn.length; i++){
    promptUpdateToDoBtn[i].addEventListener('click', () => {
    toDoItemContent[i].replaceWith(updateToDoForm[i]);
    promptUpdateToDoBtn[i].style.display = 'none';
    deleteToDoBtn[i].style.display = 'none';
    if (updateToDoForm[i].style.display === 'block') {
        updateToDoForm[i].style.display = 'none';
    } else {
        updateToDoForm[i].style.display = 'block';
    }
});
submitUpdatedToDoBtn[i].addEventListener('submit', () => {
    updateToDoForm[i].style.display = 'none';
    promptUpdateToDoBtn[i].style.display = 'inline';
    deleteToDoBtn[i].style.display = 'inline';
});
}

const promptNewToDoListTitle = document.getElementsByClassName('promptNewToDoListTitle');
const newToDoListTitleForm = document.getElementsByClassName('newToDoListTitleForm');
const submitNewToDoListTitle = document.getElementsByClassName('submitNewToDoListTitle');
const toDoListTitleHeader = document.getElementsByClassName('toDoListTitleHeader');

// Displays and hides the form that allows users to change the title of their to-do list
for(let i = 0; i < promptNewToDoListTitle.length; i++){
    promptNewToDoListTitle[i].addEventListener('click', () => {
    toDoListTitleHeader[i].replaceWith(newToDoListTitleForm[i]);
    promptNewToDoListTitle[i].style.display = 'none';
    if (newToDoListTitleForm[i].style.display === 'inline') {
        newToDoListTitleForm[i].style.display = 'none';
    } else {
        newToDoListTitleForm[i].style.display = 'inline';
    }
});

submitNewToDoListTitle[i].addEventListener('click', () => {
    newToDoListTitleForm[i].style.display = 'none';
    promptNewToDoListTitle[i].style.display = 'inline';
});
}

const toDoItemCheckBox = document.getElementsByClassName('toDoItemCheckBox');

// Toggles strikethrough of a to-do item once it is checked off
for(let i = 0; i < toDoItemCheckBox.length; i++){
    toDoItemCheckBox[i].addEventListener('click', () => {
        toDoItemContent[i].classList.toggle("strikethrough");
    })
}

