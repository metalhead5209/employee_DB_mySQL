document.addEventListener('DOMContentLoaded', () => {
    loadTable([]);
})

const loadTable = (data) => {
    const table = document.querySelector('table tbody');
    // let tableText = ''

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}
