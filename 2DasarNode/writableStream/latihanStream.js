//!combination readableStram & writeableStream;
/*
read input.txt and write into output.txt
with the following :
1. teks dibaca readable stream memiliki ukuran 15 karakter
2. tulis ulang menggunakan teknik writable stream
untuk bagian teks dibaca dipisah baris baru [\n];
*/
const fs = require('fs');
const path = require('path');

const readableSteam = fs.createReadStream(path.resolve(__dirname, './input.txt'),{
    highWaterMark:15
});
const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));
readableSteam.on('readable',()=>{
    try{
        writeableStream.write(`${readableSteam.read()}\n`);
        // process.stdout.write(`[${readableSteam.read()}]`)
    }catch(error){
        console.log(error.message);
    }
});

