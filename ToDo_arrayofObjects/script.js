const tasks = {
    items: [],
    task: {
        desc: "bdhb",
        // date : 0,
        // isDeleted: false,
        // priority: 1,
    },
    element: document.getElementById("newresult"),
    add: function (desc) {
        this.task.desc = desc;
        // this.task.date = date;
        this.items.push(this.task);
        
        console.log(this.items);
        // console.log(this.task.date);
        this.render();
    },
    render: function () {
        console.log(this.items);
        const li = document.createElement('li');
        const deletee = document.createElement('button');
        li.textContent = this.task.desc;
        // li.append(this.task.date);
        li.append(deletee);
        deletee.innerHTML = "Delete";
        this.element.append(li);
            deletee.addEventListener("click", function remove() {
            confirm('Are you sure You want to Remove this task!');
            li.style.textDecoration = "line-through";
        })
    },
}