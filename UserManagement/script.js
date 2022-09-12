const register = {
    persons: [],
    details: {
        name: '',
        username: '',
        gmail: '',
        tel: '',
        isStatus: 'InActive'
    },
    get: function (name, username, gmail, tel) {
        name = document.querySelector('#Name').value,
            username = document.querySelector('#userName').value,
            gmail = document.querySelector('#email').value,
            tel = document.querySelector('#phone').value,
            date = document.querySelector('#Date').value;
        this.details = {
            name: name,
            username: username,
            gmail: gmail,
            tel: tel,
            isStatus: 'InActive',
            date: date
        }
        console.log(this.details);
        this.add();
    },
    add: function () {
        this.persons.push(this.details);
        let table = document.querySelector('#js-table'),
            row = table.insertRow(),
            cellName = row.insertCell(),
            cellUserName = row.insertCell(),
            cellGmail = row.insertCell(),
            cellTel = row.insertCell(),
            cellStatus = row.insertCell(),
            cellDate = row.insertCell();
        cellAction = row.insertCell();
        cellName.innerHTML = `${this.details.name}`;
        cellUserName.innerHTML = `${this.details.username}`;
        cellGmail.innerHTML = `${this.details.gmail}`;
        cellTel.innerHTML = `${this.details.tel}`;
        cellStatus.innerHTML = `${this.details.isStatus}`
        cellDate.innerHTML = `${this.details.date}`;
        let btn_view = document.createElement('button');
        
        btn_view.innerHTML = "View";
        let btn_edit = document.createElement('button');
        // btn_edit.setAttribute('id', '#btn_view');
        btn_edit.innerHTML = "Edit";
        let btn_remove = document.createElement('button');
        // btn_remove.setAttribute('onclick', 'remove()');
        btn_remove.innerHTML = "Remove";
        let btn_changeStatus = document.createElement('button');
        // btn_changeStatus.setAttribute('id', '#btn_view');
        btn_changeStatus.innerHTML = "Active";
        cellAction.append(btn_view, btn_edit, btn_remove, btn_changeStatus);
        this.persons.forEach((row) => {
            btn_view.onclick = () => {

            };
            btn_changeStatus.onclick = (isStatus) => {
                var status = document.getElementsByTagName('td')[4].textContent;

                if(status == 'InActive'){
                    document.getElementsByTagName('td')[4].textContent = 'Active';
                    btn_changeStatus.innerHTML = 'InActive';
                    btn_changeStatus.setAttribute('color', 'red');
                }
                else {
                    document.getElementsByTagName('td')[4].textContent = 'InActive';
                    btn_changeStatus.innerHTML = 'Active'
                }
            };
            btn_remove.onclick = (row) => {
                console.log(row);
                const deletee = row.target;
                deletee.closest('tr').remove();
            }
            btn_edit.onclick = () => {
                var table = document.getElementById('js-table'),
                    rIndex;
                for (var i = 0; i < table.rows.length; i++) {
                    table.rows[i].onclick = function () {
                        rIndex = this.rowIndex;
                        console.log(rIndex);
                        document.getElementById('Name').value = this.cells[0].innerHTML;
                        document.querySelector('#userName').value = this.cells[1].innerHTML;
                        document.querySelector('#email').value = this.cells[2].innerHTML;
                        document.querySelector('#phone').value = this.cells[3].innerHTML;
                        document.querySelector('#Date').value = this.cells[5].innerHTML;
                    }
                }
                btn_edit.innerHTML = "Save";
                btn_edit.onclick = () => {
                    table.rows[rIndex].cells[0].innerHTML = document.querySelector('#Name').value;
                    table.rows[rIndex].cells[1].innerHTML = document.querySelector('#userName').value;
                    table.rows[rIndex].cells[2].innerHTML = document.querySelector('#email').value;
                    table.rows[rIndex].cells[3].innerHTML = document.querySelector('#phone').value;
                    table.rows[rIndex].cells[5].innerHTML = document.querySelector('#Date').value;
                    btn_edit.innerHTML = "Edit";
                }
            }
        });
    },
    search: function() {
        let search = document.querySelector('#js-search').value.toUpperCase();
        let table = document.querySelector('#js-table');
        let tr = table.getElementsByTagName('tr');
        for(var i = 0; i< tr.length; i++){
            let td = tr[i].getElementsByTagName('td')[0];
            if(td) {
                let value = td.textContent || td.innerHTML;
                if(value.toUpperCase().indexOf(search) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "None";
                }
            }
        }
    }
}
