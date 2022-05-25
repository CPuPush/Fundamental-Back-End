const fs = require('fs');
const path = require('path');

 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('error to read data');
        return;
    }
    console.log(data);
};
fs.readFile(path.resolve(__dirname,'notes.txt'), 'UTF-8', fileReadCallback);
/**
synchronous
fs.readFileSync()
example using sync
const data = fs.readFileSync('todo.txt', 'UTF-8')
 */