// TODO 1 core module
const EventEmitter = require('events');
// TODO 2
const myEmitter = new EventEmitter();
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// TODO 3
myEmitter.on('birthday', birthdayEventListener);
// TODO 4
myEmitter.emit('birthday', 'CPu');