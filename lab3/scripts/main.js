let row_count = 0;

function create_table(){
    if (row_count === 0){
        vary = document.querySelector('.input_field').value;
        row_count++;
        let table = document.createElement('table');
        let row = document.createElement("tr");
        row.className = "row_" + row_count;
        let data_1 = document.createElement("td");
        let data_2 = document.createElement("td");
        document.body.append(table);
        table.append(row);
        data_1.innerHTML = row_count;
        row.append(data_1);
        data_2.innerHTML = 1;
        row.append(data_2);
        document.querySelector('.new_row_button').removeAttribute('disabled');
        document.querySelector('.delete_row_button').removeAttribute('disabled');
    }
    else{
        alert("Table already exist!")
    }
}

function add_row(){
    row_count++;
    let row = document.createElement("tr");
    row.className = "row_" + row_count;
    let data_1 = document.createElement("td");
    let data_2 = document.createElement("td");
    let table = document.querySelector("table");
    document.body.append(table);
    table.append(row);
    data_1.innerHTML = row_count;
    row.append(data_1);
    data_2.innerHTML = row_count*row_count;
    row.append(data_2);
}

function delete_row(){
    vary = document.querySelector('.input_field').value;
    let deleted_row = document.querySelectorAll('.row_' + vary);
    if (deleted_row.length === 0){
        alert("Строки с таким номером не существует!")
    }
    else{
       deleted_row.forEach(r => r.remove());
    }
}

document.querySelector('.create_table_button').onclick = create_table;
document.querySelector('.new_row_button').onclick = add_row;
document.querySelector('.delete_row_button').onclick = delete_row;