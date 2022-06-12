let id = 0;

document.getElementById('addNewTask').addEventListener('click', () =>{
    let createdDate = new Date();
    let table = document.getElementById('list')
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-pizza').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById("new-instructions").value;
    let progress = row.insertCell(3);
    progress.appendChild(progressBar());
    document.getElementById('new-pizza').value = '';
    
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-pizza').value = '';


});

function progressBar() {
    let bar = document.createElement('div');
    bar.className = 'progress';
    bar.onclick = () => {
        console.log(`Adding progress bar to id: item-${id}`);
        let progressElement = document.getElementById(`item-${id}`);
        progressElement.parentNode.removeChild(progressElement);
    };
    return bar;
} 

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let deleteElement = document.getElementById(`item-${id}`);
        deleteElement.parentNode.removeChild(deleteElement);
    };
    return btn;
} 

