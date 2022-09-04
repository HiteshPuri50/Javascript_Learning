let items = [];
const tasks = {
    element: document.getElementById("newresult"),
    add: function (desc) {
        items.push({
            desc,
        },);
        console.log(items);
        this.render(desc);
    },
    render: function (desc) {
        console.log(items);
        const li = document.createElement('li');
        const deletee = document.createElement('button');
        const addChild = document.createElement('button');
        li.textContent = `${desc}`;
        li.append(deletee);
        li.append(addChild);
        deletee.innerHTML = "Delete";
        addChild.innerHTML = "addChild";
        this.element.append(li);
        deletee.addEventListener("click", function remove() {
            confirm('Are you sure You want to Remove this task!');
            li.style.textDecoration = "line-through";
        });
        console.log(tasks);
        addChild.addEventListener("click", function addChild() {
            console.log(tasks);
            children = prompt("Please Enter the Task Child", "");
            if (children != '') {
                console.log(children);
                items.push({
                    children
                },);
                tasks.renderChild();
            }
        })
    },
    renderChild: function () {
        let ul = document.createElement('ul');
        this.element.appendChild(ul);
        let li1 = document.createElement('li');
        ul.append(li1)
        li1.append(children);
    },     
    }
