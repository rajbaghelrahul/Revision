// console.log("Hello World!");

// Method 1
// document.querySelector("form").addEventListener("submit", el => {
//     event.preventDefault();
//     console.log("Hello World!");
// });

// Method 2
// document.querySelector("form").addEventListener("submit", () => {
//     event.preventDefault();
//     console.log("Hello World!");
// });

// Method 3
// document.querySelector("form").addEventListener("submit", function() {
//     event.preventDefault();
//     console.log("Hello World!");
// });

// Method 4
// document.querySelector("form").addEventListener("submit", Todo);

// function Todo() {
//     event.preventDefault();
//     console.log("Hello World!");
// }


// Method 5
document.querySelector("form").addEventListener("submit", Todo);

function Todo() {
    event.preventDefault();    // It prevents the unwanted Default behavior of form.
    console.log("Hello World!");
    
    var Task = document.getElementById("task").value;
    var Priority = document.querySelector("#priority").value;

    console.log(Task, Priority);

    // creating Tags for appending tbody and showing data.
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = Task;

    var td2 = document.createElement("td");
    td2.innerText = Priority;
    if (Priority === "High") {
        td2.style.background = "red";
    }
    else if (Priority === "Low") {
        td2.style.background = "green";
    }

    var td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.addEventListener("click", TodoDelete);

    tr.append(td1, td2, td3);

    document.querySelector("tbody").append(tr);
}

function TodoDelete() {
    event.target.parentNode.remove();
}