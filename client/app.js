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
    window.location.reload();}
})
    
const rowInTable = (data) => {

}

const loadTable = (data) => {
    const table = document.querySelector('table tbody');
    
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }
    let tableHtml = '';

    data.forEach(({id, name, date_hired}) => {
        tableHtml += '<tr>';
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += `<td>${new Date(date_hired).toLocaleString()}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;
        tableHtml += '</tr>';
    });

    table.innerHTML = tableHtml;
}
