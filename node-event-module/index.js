const { EventEmitter } = require('events');
const express = require('express');

const eventEmitter = new EventEmitter();

const app = express();

app.set('eventEmitter', eventEmitter);

eventEmitter.on("myData", (data) => {
    console.log("data is: ", data);
    console.log("data end");
});

// access it from any module of the application
console.log(app.get('eventEmitter'));

app.get('/data', (req, res)=>{
    const emitter = app.get('eventEmitter');
    emitter.emit('myData', "Testing");
    return res.send("success");
});

app.listen(5000, ()=> {
    console.log("app listing to port 5000")
});