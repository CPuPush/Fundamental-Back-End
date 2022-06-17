/*
object window pada browser dan object global pada Node.js merupakan
Global Object.
Seluruh fungsi atau properti yang menjadi member dari global object dapat
diakses dimana saja alias memiliki cakupan global. pada Node.js anda bisa
melihat apa saja yang termasuk member dari global object dengan menggunakan
//?Object.getOwnPropertyNames(global);

Dilansir dari website Node.js, sebenarnya mereka hanya menambahkan
beberapa object saja. Object tersebut dinamakan dengan 'true globals'
=> global : Global namespace. Member apapun didalam object ini dapat diakses
pada cakupan global.
=> process : Menyediakan interaksi dengan proses Node.js yang berjalan.
=> console : Menyediakan berbagai fungsionalitas STDIO
=> setTimeout, clearTimeout, setInterval, clearInterval

pseudo-global atau object global semu, tidak terlihat bila dicetak
getownpropertyname. karena pada Node.js semua berkas JS adalah module
jadi pseudo globals dapat diakses layaknya global object. berikut adalah daftarnya :
//?module : digunakan untuk sistem modularisasi pda Node.js
//?__filename : keyword untuk mendapatkan lokasi berkas JS yang dieksekusi(tidak tersedia pada Node.js REPL)
//?__dirname : keyword untuk mendapatkan root directory dari berkas JS yang dieksekusi
//?require : digunakan untuk mengimpor module JS
*/