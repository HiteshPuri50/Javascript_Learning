const tasks = {
    items: [],
    task: {
        desc: "",

    },
    children: {
        child: ''
    },
    element: document.getElementById("newresult"),
    add: function (desc) {
        this.task.desc = desc;
        this.items.push(this.task);
        console.log(this.items);
        this.render();
    },
    render: function () {
        console.log(this.items);
        const li = document.createElement('li');
        const deletee = document.createElement('button');
        const addChild = document.createElement('button');
        li.textContent = this.task.desc;
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
                console.log(tasks.children);
                tasks.children = children;
                tasks.children.child = children;
                tasks.items.push(tasks.children);
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
    sort: function() {
        console.log(tasks.items);
        sort = tasks.items.sort();
        console.log(sort);
        document.getElementById('newresult').innerHTML = sort;
    }
}
