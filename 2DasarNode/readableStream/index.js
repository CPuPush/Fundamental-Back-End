/*
ketika membaca data dengan fs.readFile within ukuran file yang besar
maka akan membutuhkan waktu yang lama dan memori yang bersar untuk mendapatkan hasilnya
hal ini sungguh tidak efektif.
//*solusi menggunakan stream
teknik ini tidak membaca berkas sekaligus tetapi mengirim bagian demi bagian.
teknik stream merupakan salah satu konsep fundamental yang mendukun aplikasi node.js bekerja.
Tekni ini dapat menangani kasus baca tulis berkas, komunkassi jaring, atau beban 
kerja ataupun agak dapat berjalan dengan lebih efisien.
//?we can create readable stream using createReadStream() method form fs core modules.

*/
const fs = require('fs');
const path = require('path')
const readableStream = fs.createReadStream(path.resolve(__dirname,'./article.txt'),{
    highWaterMark: 10
});

readableStream.on('readable',()=>{
    try{
        process.stdout.write(`[${readableStream.read()}]`);
    }catch(error){
        console.log(error);
    }
});

readableStream.on('end',()=>{
    console.log('DONE');
});
/*
fungsi createReadStream() menerima 2 argument.
yang pertama lokasi berkas yang hendak dibaca
dan yang kedua object konfigurasi. didalam object konfigurasi kiat bisa menetapkan
ukuran buffer melalui properti highWaterMark (16384/16kb default).artinya berkas teks akan
menjadi ukuran kecil jadi ukuran buffer menjadi 16 kb
artinya berkas akan dibaca setiap 16 karakter.

//?Buffer didalam stream adalah memori semsntara yang digunakan oleh stream
dalam menyimpan data hingga data tersebut dikonsumsi.

createReadStream() mengembalikan //*eventEmitter, 
dimana kita dapat menetapkan fungsi listener setiap kali event readable 
dibangkitkan. event readable akan dibangkitkan ketika buffer sudah memiliki
ukuran sesuai dengan nilai yang ditetapkan pada properti highWwaterMark,
dalam arti buffer sudah siap dibaca.
kemudian event end akan dibangkitkan setelah proses stram selesai 


*/