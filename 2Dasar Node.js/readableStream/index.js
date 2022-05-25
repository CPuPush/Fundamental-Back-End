const fs = require('fs');
const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});
//mengembalikan EventEmitter
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.

    }
});
//event readable akan dibangkitkan ketika buffer sudah memiliki ukuran dengan nilai yang ditetapkan dalam highwatermark
 
readableStream.on('end', () => {
    console.log('Done');
});