/*
membaca readableStream
menulis //*writableStream

untuk membuat writable stream dalam menulis berkas gunakan
method createWriteSream() dari module fs

*/
const fs = require('fs');
const path = require('path');
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output01.txt'));

writableStream.write('ini merupakan text pertama\n');
writableStream.write('ini merupakan text kedua\n');
writableStream.end();

/*
method end() digunakan untuk menandakan akhir dari writable stream sekaligus
bisa digunakan sebagi penulisan writeable terakhir.
*/