const Tiger = require('./tiger');
const Wolf = require('./wolf');

const fighting = (tiger, wolf)=>{
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }
    if(wolf.strength > tiger.strength){
        wolf.howl();
        return;
    }
    console.log('Tiger and Wolf have same strength');
}
const tiger = new Tiger();
console.log(tiger.strength);
console.log(tiger.growl());
const wolf  = new Wolf();
console.log(wolf.strength);
console.log(wolf.howl());

fighting(tiger, wolf)