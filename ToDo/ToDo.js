var Savenote = [];

function todo() {
    var a = document.getElementById('SaveNote').value;
    a.value = "";
    let ul = document.getElementById('newresult');
    ul.innerHTML = "";
    if (a.length == 0) {
        alert('Enter Valid Data');
    } else {
        let x = Savenote.push({
            task: `${a}`
        });
        for (let i = 0; i < Savenote.length; i++) {
            let list = document.createElement('li');
            let btn = document.getElementById('newresult');
            list.append(Savenote[i].task);
            ul.append(list);
            list.append(btn);
        }
    }
}
