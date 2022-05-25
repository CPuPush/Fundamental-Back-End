const EventEmitter = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffee = ({name})=>{
    console.log(`Kopi ${name} telah dibuat`);
}
// melakukan proses pendaftaran sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);

//memicu event coffee-order terjadi
myEventEmitter.emit('coffee-order',{name:'tubruk'});
