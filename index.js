let count = 1;

document.getElementById('add-item-btn').addEventListener('click', function () {

    const inputField = document.getElementById('input-field-text');

    const inputText = inputField.value;

    const tableBody = document.getElementById('table-body');


    // adding items 

    const tr = document.createElement('tr');

    tr.innerHTML = `
        <th class="to-do-number" scope="row">${count++}</th>
        <td>${inputText}</td>
        <td>
        <button  class="btn btn-danger delete-btn">Delete</button>
        <button  class="btn btn-warning edit-btn">Done</button>
        </td>
    `;

    tableBody.appendChild(tr);

    inputField.value = "";



    // delting items
    const deleteButtons = document.getElementsByClassName('delete-btn');


    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function (event) {

            const tableRow = event.target.parentNode.parentNode;

            const tableBody = event.target.parentNode.parentNode.parentNode;

            tableBody.removeChild(tableRow);

            const toDoNumbers = document.getElementsByClassName('to-do-number');
            count = 1;
            for (let toDoNumber of toDoNumbers) {
                toDoNumber.innerText = count;
                count++;
            }

        })
    }

    // done buttons 

    const doneButtons = document.getElementsByClassName('edit-btn');

    for (let doneButton of doneButtons) {
        doneButton.addEventListener('click', function (event) {

            const doneElement = event.target.parentElement.previousElementSibling;

            doneElement.style.textDecoration = 'line-through';

        });
    }


    // clear all 

    const clearAllButton = document.getElementById('clear-btn');

    clearAllButton.addEventListener('click', function () {

        tr.innerHTML = "";
        count = 1;
    });
});



