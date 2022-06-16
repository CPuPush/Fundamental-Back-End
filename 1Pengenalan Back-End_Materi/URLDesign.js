/*
//!URL DESIGN
URL, Path, ataupun Endpount merupakan hal terpenting yang harus diperhatikan.

//?Gunakan kata benda daripada katakerja pada EndpointPath
Dengan adanya HTTP verbs Anda cukup memberikan endpoint GET /articles 
untuk mendapatkan data artikel atau POST /articles untuk menambahkan artikel.

//?Gunakan Kata jamak pada endpoint untuk Resouce Collection
Endpoint /articles/:id merupakan contoh yang baik

//?Gunakan Endpoint berantai untuk resource yang memiliki hirarki/relasi
Contohnya untuk mendapatkan daftar komentar dari sebuah artikel, endpoint GET /articles/:id/comments merupakan contoh yang tepat
daripada menggunakan endpoint GET /comments kemudian memberikan nilai id artikel pada request body.
*/