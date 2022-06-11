document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5252/all')
    .then(res => res.json())
    .then(data => loadTable(data['data']));
    
});

const addEmpBtn = document.querySelector('#addBtn').addEventListener('click', () => {
    const nameInput = document.querySelector('#emp');
    const name = nameInput.value;
    nameInput.value = '';

    fetch('http://localhost:5252/add', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ name : name})
    })
    .then(res => res.json())
    .then(data => rowInTable(data['data']));
    console.log(name)
})
    
const rowInTable = (data) => {

}

const loadTable = (data) => {
    const table = document.querySelector('table tbody');
    
    // console.log(data);
    

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}

