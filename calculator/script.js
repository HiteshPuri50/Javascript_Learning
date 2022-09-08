function display(val) {
    document.getElementById('textval').value += val;
}

function deletee() {
    let x = document.getElementById('textval').value;
    let y = x.slice(0, -1);
    document.getElementById('textval').value = y;
}

function answer() {
    let x = document.getElementById('textval').value;
    let y = eval(x);
    document.getElementById('textval').value = y;
}

function reset() {
    document.getElementById('textval').value = '';
}