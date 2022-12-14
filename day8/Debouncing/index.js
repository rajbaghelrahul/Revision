console.log("Hello please for Hello World!");
function Hello() {
    console.log("Hello World!");
}

function debounce(fn, d) {
    let timer ;
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, d);
    }
}

// debounce(Hello, 2000);
const BetterFunction = debounce(Hello, 2000);
BetterFunction();