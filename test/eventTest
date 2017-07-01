var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('aobin',function (a,b) {
    console.log("aobin event is triggered!")
    console.log(a+b);
});

setTimeout(function () {
    eventEmitter.emit('aobin');
    eventEmitter.emit('aobin',4,5)
},2000);
