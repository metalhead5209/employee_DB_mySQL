document.addEventListener('DOMContentLoaded', () => {
    fetch('http:localhost:5252/all')
    .then(res => res.json())
    .then(data => console.log(data));
    loadTable([]);
})

const loadTable = (data) => {
    const table = document.querySelector('table tbody');
    // let tableText = ''

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}
