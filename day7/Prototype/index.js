const obj = {
    name: "Raj Baghel",
    class: "B.Sc",
    getName: function() {
        return this.subject;
    }
}
// console.log(obj.name);

const obj2 = {
    subject: "Maths",
    __proto__: obj
}

console.log(obj2.getName());