function getName() {
    document.getElementById("btn").disabled = false;
    console.log("Hello world again!");
};

function Hello(fn, d) {
    return function(...args) {
        document.getElementById("btn").disabled = true;
        setTimeout(function() {
            fn();
        },d);
    }
}

const funto = Hello(getName, 3000);
// funto();