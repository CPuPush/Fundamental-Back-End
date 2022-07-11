/*//! Postman bisa melakukan uji secara
sehingga tak perlu lagi melihat respons dari server secara manual untuk memastikan responnya sesuai
dengan harapan. Pengujian otopatis di postman menggunakan kode JS, serupa dengan unit dan integration testing
yang sudah dipelajari.

melalui testing otomatis ini kita bisa menguji nilai dari status code, properti header, hingga body respons.
pengujian otomatis akan pass(berhasil) ketika semua variable yang diuji sesuai ekspektasi.
//? fitur Collection dan Environtment di postman akan digunakan dalam pengujian.
*/

/*//! Postman Collection
Postman collection merupakan tempat menyimpan kumpulan request. Kita bisa menganggap
collection adalah sebuah folder yang menyimpan berkas, namun brekas itu adalah request. setiap
request yang anda kirim di postman sebenarnya akan tampak pada tab history di sidebar.

dalam penggunaan ringan, memilih dan menggunakan kembali request melalui History merupakan pengalaman
yang cukup nyaman. Namun bila anda banyak melakukan request, hostory request akan menumpuk tidak karuan.
Dengan begitu, anda akan membutuhkan waktu yang lama untuk memilah dan memilih request yang ingin 
digunakan kembali.

Dengan adanya collection request bisa anda kelompokkan sehingga lebih mudah untuk diakses 
contoh collection notes API Test.
tambahkan pada collection yang ingin di test,
*/
/*//! Postman Environment
Environment merupakan kumpulan dari variabel yang dapat digunakan pada request di Postman. 
Ketika melakukan pengujian otomatis, terkadang kita perlu menyimpan nilai pada sebuah variable.
Contohnya ketika melakukan request menambahkan catatan, kita akan mendapatkan id catatan 
tersebut dari server. Id tersebut perlu disimpan pada variabel agar dapat digunakna oleh request selanjutnya.

variabel tak hanya digunakan untuk kasus tersebut saja, melainkan dapat juga untuk menyimpan nilai
token, auth-key, atau nilai lainnya yang dipakai selama proses uji.


*/