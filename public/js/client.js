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







