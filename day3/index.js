// console.log("Hello world!");


// function myPromise(data) {
//     var promise = new Promise(function(res, rej) {
//         setTimeout(function() {
//             if (data === "1234") {
//                 res("Hello world! I'm right");  // It will come after 1 sec
//             }
//             else {
//                 rej("Hello world! I'm wrong");  // It will also come after 1 sec
//             }
//         },1000);
//     });
//     return promise;
// }

// var callingFunction = myPromise("12345");
// callingFunction.then((res) => {
//     console.log(res, "Resolved promise");
// }).catch((err) => {
//     console.log(err, "Rejected Promise");
// });


// console.log(callingFunction, "Pending promise");    // It will come on same time but status is pending because 
//                                                     // it is without any .then or .catch function..







var loading = 'https://imgs.search.brave.com/7xD-rIWoucUXoD7OuzwGawWFR1s1TE7P42z9bMj9M1M/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzI5NzM1/NjEvc2NyZWVuc2hv/dHMvNTc1NzgyNi9s/b2FkaW5nX18uZ2lm.gif';
var successfull = 'https://imgs.search.brave.com/N-1VHrUXXzreUOEhb_NK-jJMwey1at6Kz6X7BNJ2Gg4/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzExNTQ1/MzUvc2NyZWVuc2hv/dHMvMzI4ODY1MC9k/cmliYmJsZS1zdWNj/ZXNzLTIuZ2lm.gif';
var error = 'https://imgs.search.brave.com/wxGvNidwVqMjW0EjJUQbFeEiVh09qUnopZBiKf0ohis/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzI0Njkz/MjQvc2NyZWVuc2hv/dHMvNjUzODgwMy9j/b21wXzMuZ2lm.gif';

function myPromise() {
    var inputBox = document.getElementById("inp").value;
    var showingData = document.getElementById("showing");
    showingData.innerHTML = `<img src=${loading}></img>`;
    var promise = new Promise(function(res, rej) {
        setTimeout(function() {
            if (inputBox == '1234') {
                res("Payment done successfull");
            }
            else {
                rej("Payment is not done");
            }
        },2000);
    });
    // return promise;
    // callPromise(promise);
    var callPromise = promise.then(function(res) {
        console.log(res);
        document.getElementById("showing").innerHTML = `<img src=${successfull}></img>`;    
    }).catch(function(rej) {
        console.log(rej);
        document.getElementById("showing").innerHTML = `<img src=${error}></img>`;
    });
}


