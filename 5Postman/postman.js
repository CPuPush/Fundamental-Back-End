/*
Postman merupakan tools yang sangat cocok untuk menguji sebuah API karena memiliki fungsi yang relatif lengkap
sebagai API caller dalam melakukan HTTP request. bahkan untuk pengembangan API yang sudah komplejs,
pengujian postman dapat diintegrasikan ke dalam alur CI/CD
*/
/*//! Menambahkan catatan baru
Ubah method menjadi POST,p kemudian pada field isi link localhost http://localhost:5000/notes
pilih body selanjutnya pilih raw, tambahkan json sesuai dengan pada format yang ditentukan.
{
    "title": "catatan a",
    "tags": "programs",
    "body" : "this is body of note"
}
pada code kita membuat success, maka pada response akan keluar status, message, data
{
    "status": "success",
    "message": "catatan berhasil ditambahkan",
    "data": {
        "noteId": "WOBNyicBrKGqrqsC"
    }
}
*/
/*//! Mendapatkan Seluruh catatan
method 'GET' dan masukkan localhost:5000/notes
*/
/*//! Mendapatkan catatan secara spesifik
'GET' localhost:5000/notes/{id}
*/
/*//! Mengubah Catatan
'put' localhost:5000/notes/{id}
tambahkan body => raw
{
   "title": "Catatan A Revisi",
   "tags": ["Android", "Web"],
   "body": "Isi dari catatan A revisi"
}
*/
/*//! Menghapus Catatan
'delete' localhost:5000/notes/{id}

*/