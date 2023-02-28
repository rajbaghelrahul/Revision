const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("counterAPI", () => {
    count++;
    console.log("API called", count);
});

app.get('/', (req, res) => {
    res.send("get API called");
    event.emit("counterAPI");
});

app.post('/post', (req, res) => {
    res.send("post API called");
    event.emit("counterAPI");
});

app.put('/put', (req, res) => {
    res.send("put API called");
    event.emit("counterAPI");
});

app.delete('/delete', (req, res) => {
    res.send("delete API called");
    event.emit("counterAPI");
});

app.listen(3000);