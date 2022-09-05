var items = [];
const tasks = {
    task: {
        desc: "",
        id: Date.now(),
        subTask: "subTask",
    },
    childTask: {
        desc: "",
    },
    element: document.getElementById("newresult"),
    send: function (desc, childTask) {
        this.task = {
            id: Date.now(),
            desc: desc,
            subTask: childTask,
        };
        this.add();
    },
    add: function () {
        items.push(this.task);
        this.render();

    },
    render: function () {
        this.element.innerHTML = "";
        items.forEach((item) => {
            console.log(this.task);
            console.log(items);
            const li = document.createElement('li');
            const p = document.createElement('p');
            const span = document.createElement('span');
            const deletee = document.createElement('button');
            const addChild = document.createElement('button');
            const up = document.createElement('button');
            const down = document.createElement('button');

            p.textContent = item.desc;
            span.append(p,deletee, up, down, addChild);
            li.append(span)
            deletee.innerHTML = "Delete";

            up.innerHTML = "Up";
            down.innerHTML = 'Down';
            let index = items.indexOf(item);
            if (index == 0) {
                up.style.visibility = "hidden";
            }
            addChild.innerHTML = "addChild";
            this.element.appendChild(li);
            deletee.addEventListener("click", function remove() {
                confirm('Are you sure You want to Remove this task!');
                li.style.textDecoration = "line-through";
            });

            addChild.onclick = () => {
                this.addChild1(item, p);
                addChild.style.display = "none";};
            up.onclick = () => this.moveUp(items.indexOf(item));
            down.onclick = () => this.moveDown(items.indexOf(item));
            if(item.subTask != undefined){
                const subTask = document.createElement("p");
                subTask.innerHTML = item.subTask.desc;
                p.append(subTask);
            }
        });
    },
    addChild1: function (item, p) {
        const child = document.createElement("input");
        const btnSave = document.createElement("button");
        let index = items.indexOf(item);

        btnSave.innerHTML = "Save";
        p.append(child, btnSave);

        btnSave.onclick = () => {
            this.childTask = { desc: child.value};
            items[index].subTask = this.childTask;
            this.render();
        }

    },
    renderChild: function () {
        let ul = document.createElement('ul');
        this.element.appendChild(ul);
        let li1 = document.createElement('li');
        ul.append(li1)
        li1.append(children);
    },
    moveUp: function (index) {
        console.log(items);
        let temp = items[index];
        items[index] = items[index - 1];
        items[index - 1] = temp;
        console.log(items);
    },
    moveDown: function (index) {
        console.log(items);
        let temp = items[index];
        items[index] = items[index + 1];
        items[index + 1] = temp;
        console.log(items);
    }
}

function sortList() {
    let todo = document.getElementById('newresult');
    var switching = true;
    while (switching) {
        switching = false;
        var list = todo.getElementsByTagName("li");
        for (var i = 0; i < (list.length - 1); i++) {
            var shouldSwitch = false;
            if (list[i].innerHTML.toLowerCase() > list[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            list[i].parentNode.insertBefore(list[i + 1], list[i]);
            switching = true;
        }
    }
}
