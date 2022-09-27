var count = 0;
let comments = {
  totalComment: [],
  arrComment: {
    id: Date.now(),
    pComment: null,
    Like: 0,
    child: "child",
  },
  cmt2: {
    comment: "",
    child: "",
  },
  element: document.querySelector("#jsOutput"),
  get: function (input, cmt2) {
    if (input == "") {
      alert("Comment couldn't be Empty");
    } else {
      this.arrComment = {
        id: Date.now(),
        pComment: input,
        Like: 0,
        child: cmt2,
      };
      this.add();
    }
  },
  add: function () {
    this.totalComment.push(this.arrComment);
    this.render();
  },
  render: function () {
    this.element.innerHTML = "";
    this.totalComment.forEach((comment) => {
      let AddComment = document.createElement("button"),
        like = document.createElement("button"),
        Delete = document.createElement("button");
      let ul = document.createElement("ul"),
        li = document.createElement("li");
      var p = document.createElement("p");
      like.innerHTML = "Like";
      Delete.innerHTML = "Delete";
      AddComment.classList.add("button");
      AddComment.onclick = () => {
        AddComment.style.display = "none";
        this.AddComment(comment, p);
      };
      p.append(comment.pComment, like, Delete);
      AddComment.innerHTML = "addComment";
      p.append(AddComment);
      li.append(p);
      ul.appendChild(li);
      this.element.append(ul);
      like.onclick = () => this.Like(like);
      Delete.onclick = () => this.Delete(li, comment);
      let index = this.totalComment.indexOf(comment);
      if (comment.child != undefined) {
        children = comment.child;
        let Lk = document.createElement("button"),
          Dlt = document.createElement("button"),
          com = document.createElement("button");
        Lk.innerHTML = "Like";
        Dlt.innerHTML = "Delete";
        com.innerHTML = "Add Comment Again";
        const Comment = document.createElement("p"),
          childp = document.createElement("p");
        Comment.innerHTML = comment.child.comment;
        childp.append(Comment, Lk, Dlt, com);
        p.appendChild(childp);
        Dlt.addEventListener("click", () => {
          childp.remove();
        });
        com.addEventListener("click", () => {
          AddComment.style.display = "none";
          this.AddComment(comment, Comment);
        });
      }
    });
  },
  Like: function (Like) {
    count += 1;
    Like.innerHTML = count;
  },
  Delete: function (li) {
    li.remove();
  },
  AddComment: function (comment, p) {
    (childElement = document.createElement("input")),
      (save = document.createElement("button"));
    let index = this.totalComment.indexOf(comment);
    childElement.placeholder = "Enter More Comment";
    save.innerHTML = "Save";
    p.append(childElement, save);
    save.addEventListener("click", () => {
      this.cmt2 = {
        comment: childElement.value,
        child: "",
      };
      let lastElement;
      for (lastElement in comment);
      console.log(comment[lastElement]);
      if (comment[lastElement] == undefined) {
        console.log(lastElement);
        console.log(comment[lastElement]);
        comment[lastElement] = this.cmt2;
        console.log(comment[lastElement]);
        this.render();
      } else {
        this.totalComment[index].child.child = this.cmt2;
        childElement.remove();
        save.remove();
        this.render1(p, index);
      }
    });
  },
  render1: function (p, index) {
    let Delete = document.createElement("button");
    let ul = document.createElement("ul"),
      li = document.createElement("li");
    const pa = document.createElement("p");
    Delete.innerHTML = "Delete";
    pa.append(this.totalComment[index].child.child.comment, Delete);
    Delete.classList.add("button");
    li.append(pa);
    ul.appendChild(li);
    p.appendChild(ul);
    Delete.addEventListener("click", () => {
      li.remove();
    });
  },
};
