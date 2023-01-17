document.querySelector("form").addEventListener("submit", MyTodo);

var todoArr = JSON.parse(localStorage.getItem("todoStore")) || []; // declaring array for storing objects
displayTodo(todoArr);

function MyTodo() {
    event.preventDefault();
    var task = document.getElementById("task").value;
    var priority = document.querySelector("#priority").value;

    
    // storing data in form of array of objects.
    var todoObj = {task : task, priority : priority};
    todoArr.push(todoObj);
    localStorage.setItem("todoStore", JSON.stringify(todoArr));


    console.log(task, priority);

    displayTodo(todoArr);
}

function displayTodo(data) {
    document.querySelector("tbody").innerText = "";  // --> for prevent repeatin rows on display
    data.map(function(elem,index) {    
        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        td1.innerText = elem.task;

        var td2 = document.createElement("td");
        td2.innerText = elem.priority;
        if (elem.priority == "High")
        {
            td2.style.backgroundColor = "red";
        }
        else if (elem.priority == "Low")
        {
            td2.style.backgroundColor = "green";
        }

        var td3 = document.createElement("td");
        td3.innerText = "Delete";
        td3.style.color = "red";
        td3.addEventListener("click", function() {
            Delete(index)});

        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr);
    });
}

function Delete(index) {
    // console.log(event.target);  // target on same node like td and whole things in td.
    // console.log(event.target.parentNode);  // target on parent node of td like div and whole things in div.
    // event.target.parentNode.remove();  // this is remove all things in div which is parent nod of td.

    console.log(index,"index");

    // console.log(todoArr);
    todoArr.splice(index,1);
    // console.log(todoArr);
    displayTodo(todoArr);
    localStorage.setItem("todoStore",JSON.stringify(todoArr));
}



