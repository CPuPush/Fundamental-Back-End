const EventEmitter = require('events');
const myEventEmitter = new EventEmitter();

//makeCoffee
const makeCoffee = (name)=>{
    console.log(`kopi ${name} telah dibuat`);
}

//makeBill
const makeBill = (price)=>{
    console.log(`Bill sebesar ${price} telah dibuat`);
}
const onCoffeeOrderedListener =({name,price})=>{
    makeCoffee(name);
    makeBill(price);
}

//pendaftaran event
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);
myEventEmitter.on('list-order', onCoffeeOrderedListener);

// memicu events
// myEventEmitter.emit('coffee-order', {name:'arabika', price:20000})
myEventEmitter.emit('list-order',({name:'Arabika', price:15000}));
