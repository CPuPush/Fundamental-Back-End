const fs = require('fs');
const {resolve} = require('path');
/**membuat program membaca input.txt dan menuliskan isi dari input.txt ke berkas output.txt*/
const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'),{
    highWaterMark:15
})
const writeableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));
readableStream.on('readable',()=>{
    try{
        //to terminal
        // process.stdout.write(`[${readableStream.read()}\n]`)
        //to file
        writeableStream.write(`${readableStream.read()}\n`);
    }catch(error){

    }
});

readableStream.on('end', ()=>{
    writeableStream.end('done');
})