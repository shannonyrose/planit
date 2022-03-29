const promptNewToDoBtn = document.getElementById('promptNewToDo');
const newToDoForm = document.getElementById('newToDoForm');
const submitNewToDoBtn = document.getElementById('submitNewToDo');
promptNewToDoBtn.addEventListener('click', () => {
    if (newToDoForm.style.display === 'block') {
        newToDoForm.style.display = 'none';
    } else {
        newToDoForm.style.display = 'block';
    }
});
submitNewToDoBtn.addEventListener('submit', () => {
    newToDoForm.style.display = 'none';
});

const dropDownOptions = document.getElementsByClassName('dropDownOptions');
const dropDownButtons = document.getElementsByClassName('dropDownButton');
for (let counter = 0; counter < dropDownButtons.length && counter < dropDownOptions.length; counter++) {
    dropDownButtons[counter].addEventListener('click', () => {
        if (dropDownOptions[counter].style.display === 'block') {
            dropDownOptions[counter].style.display = 'none';
        }
        else {
            dropDownOptions[counter].style.display = 'block';
        }
    })
}