/*
seluruh data di komputer dikelola dan diakses melalui filesystem.
ketika menjalankan kode di JS pada browser, sangat penting untuk melimitasi JS
dalam mengakses filesystem. teknik ini dinamakan //!Sandboxing
Sandboxing melindungi kita dari program jahat serta tindakan pencurian yang dapat
merampas privasi penggunanya.
di backend filesystem menjadi fitur sesnsial karena dalam pengembangan back end 
akan sering sekali mengakses atau menulis sebuah berkas didalam komputer.

node.js menyediakan core module sfs yang dapat mempermudah kita dalam mengakses file system

mengakses berkas pada komputer kita dapat menggunakan method fs.readFile().
dapat menerima 3 argument
//* lokasi berkas
//* encoding
//* callback function yang akan terpanggil bila berkas berhasil/gagal diakses
*/
const fs = require('fs');
const path = require('path');

 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('error to read data');
        return;
    }
    console.log(data);
};
// fs.readFile('notes.txt', 'UTF-8', fileReadCallback);//error to read data
//sehigga kita perlu menggunakan coremodules path dalam menetapkan alamat berkas secara lengkap dan dinamis
fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

/**
synchronous
fs.readFileSync()
example using sync
const data = fs.readFileSync('todo.txt', 'UTF-8')
 */