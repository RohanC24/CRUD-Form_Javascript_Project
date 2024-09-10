let editRow = null;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const srNo = document.getElementById('srNo').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (editRow) {
        
        editRow.cells[0].textContent = srNo;
        editRow.cells[1].textContent = firstName;
        editRow.cells[2].textContent = lastName;

        editRow = null;

        document.querySelector('#loginForm button').textContent = 'Submit';
    } else {
        
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();


        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        
        cell1.textContent = srNo;
        cell2.textContent = firstName;
        cell3.textContent = lastName;

        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.className = 'update';
        updateBtn.onclick = () => editRowData(newRow);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.onclick = () => deleteRow(newRow);

        cell4.appendChild(updateBtn);
        cell4.appendChild(deleteBtn);
    }

    document.getElementById('loginForm').reset();
});

function editRowData(row) {
    const cells = row.getElementsByTagName('td');
    document.getElementById('srNo').value = cells[0].textContent;
    document.getElementById('firstName').value = cells[1].textContent;
    document.getElementById('lastName').value = cells[2].textContent;

    editRow = row;

}

function deleteRow(row) {
    row.parentNode.removeChild(row);

    document.getElementById('loginForm').reset();
    editRow = null;  
}


