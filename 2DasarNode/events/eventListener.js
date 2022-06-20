const EventEmitter = require('events');
const { on } = require('stream');
const myEventEmitter = new EventEmitter();
const makeCoffee = (name)=>{
    console.log(`kopi ${name} telah dibuat`);
}
const makeBill = (price)=>{
    console.log(`Bill sebesar ${price} telah dibuat`);
}

//bisa membaut satu fungsi khusus untuk menangani event. Biasanya fungsi ini
//dengan handler atau listener pada maming
const onCoffeeOrderedListener = ({name, price})=>{
    makeCoffee(name);
    makeBill(price);
}

//membangkitkan emitter
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-order', {name:"tubruk", price:80000});
