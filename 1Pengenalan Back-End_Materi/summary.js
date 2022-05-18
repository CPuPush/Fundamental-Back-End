/**
//! pengertian backend
Merupakan bagian dari aplikasi yang bertanggung jawab untuk menyediakan kebutuhan yang tak terlihat oleh pengguna

//! Web server and Web service
Web server: server yang dapat menjalankan program dan dapat diakses melalui internet atau intranet
Web Service : Program yang dijalankan di web server agar kebutuhan bisnis terpenuhi

//! Komunikasi Client-Server
request line: berisi GET POST PUT DELETE, oath atau alamat yang diminta
HEader: memuat informasi yang dilampirkan terkait request seperti format dokument ex application/json, text/html dsb
Body : mengandung data yang dibutuhkan oleh server. bisa dalam bentuk teks, JSON, dll.
Body tidak wajib dilampirkan bila server tidak membutuhkan data apapun.

//!Rest Web Service
Rest atau representational State Transfer adalah salah satu gaya arsitektur yang dapat diadaptasi ketika membangun
webservice. berikut beberapa sifat yang menjadi kunci pada REST API:
1. Client server: response request
2. Stateless : tidak boleh menyimpan state atau keadaan 
3. cacheable : dapat merespon permintaan cepat
4. layered : client seharusnya tidak perlu tahu bagaimana server melayaninya

Singkatnya, ketika membangun REST API, kita harus memperhatikan empat poin berikut:

Format Request dan Response.
HTTP Verbs/Methods.
HTTP Response code.
URL Design.


*/