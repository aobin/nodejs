/**
 * Created by 敖斌 on 2017/6/24.
 */

utils = require('./utils');

var events = require('events');

var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);
var aobin = new Person('aobin')
var aobowei = new Person('aobowei')
var personArray = [aobin, aobowei]

personArray.forEach(function (person) {
    person.on('say', function (message, age) {
        console.log(message + ' ' + age)
    })
})

personArray.forEach(function (person) {
    person.emit('say', 'haha' + person.name, person.name)
})


console.log(utils.add());
console.log(utils.names.length);
console.log(utils.names[1]);


