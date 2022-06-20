/*
Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan 
suatu kejadian.
ketika ponsel berdering kita bereaksi dengan mengangkat telefon
//?Inilah yang dimaksud dengan pola event-driven

Tradisionalnya programming dilakukan dengan cara yng imperatif=>//*kalimat yang mengandung makna meminta/memerintah seseorang untuk melakukan sesuatu.

Dengan pola kaku seperti itu, kita akan sulit membangun program yang dapat menangani suatu
kejadian. Karena kita saja tidak tahu kapan suatu kejadian akan terjadi., lantas bagaimana cara
memberikan instruksi pada komputer? lalu bagaimana solusinya?
program komputer juga harus bekerja dengan pola event-driven.

Node.js menyediakan EventEmitter class yang merupakan member events core module:
*/
const EventEmitter = require('events');
const myEventEmitter = new EventEmitter();
/*
setiap instance dari EventEmitter akan memiliki fungsi //?on.
pada fungsi tersebut kita dapat menentukan aksi berdasarkan sebuah kejadian.

*/
const makeCoffee = ({name})=>{
    console.log(`Kopi ${name.key} telah dibuat`);
}
myEventEmitter.on('coffee-order', makeCoffee);
/*
Fungsi on menerima 2 buah argumen, yang pertama adalah nama event dan yanag kedua adalah 
listener atau fungsi yang akan dieksekusi ketika event terjadi. Dari kode diatas, jika terjadi
event 'coffee-order', maka akan fungsi makeCoffee akan dijalankan.
*/

/*
bagaimana cara membangkitkan suatu event? setiap instance dari EventEmitter juga memiliki fungsi
//?emit() yang berguna untuk membangkitkan event.
*/
myEventEmitter.emit('coffee-order', {name:{key:"Tubruk"}})
/*
Fungsi emit() menerima nilai argument sebanyak apapun 
*/