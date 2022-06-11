document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5252/all')
    .then(res => res.json())
    .then(data => loadTable(data['data']));
    
});

const addEmpBtn = document.querySelector('#addBtn').addEventListener('click', () => {
    const nameInput = document.querySelector('#emp');
    const name = nameInput.value;
    nameInput.value = '';
    if(!name) {
        alert('Please Enter Name')
    } else {

    
    fetch('http://localhost:5252/add', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ name : name })
    })
    .then(res => res.json())
    .then(data => rowInTable(data['data']));
    window.location.reload();
    console.log(id)
  }
})
    
const rowInTable = (data) => {
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>"

    for (var key in data) {
        if (data.hasOwnProperty(ke)) {
            if (key === 'dateHired') {
                data[key] = new Date(data[key]).toLocaleString();
            }
            tableHtml += `<td>${data[key]}</td>`;
        } 
    }

    tableHtml += `<td><button class="delete-row-btn" data-id=${data.ID}>Delete</td>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${data.ID}>Edit</td>`;

    tableHtml += "</tr>"

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml
    }
}

const loadTable = (data) => {
    const table = document.querySelector('table tbody');
    
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }
    let tableHtml = '';

    data.forEach(({ID, name, date_hired}) => {
        tableHtml += '<tr>';
        tableHtml += `<td>${ID}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += `<td>${new Date(date_hired).toLocaleString()}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${ID}>Delete</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${ID}>Edit</td>`;
        tableHtml += '</tr>';
    });

    table.innerHTML = tableHtml;
}
