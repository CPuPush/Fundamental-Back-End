/*
//!REST
atay REpresentational State Transfer adalah salah satu gaya arsitektur
yang dapat diadaptasi ketika membangun webservice.
REST menggunakan pola req-res dalam berinteraksi artinya ia memanfaatkan
protokol HTTP seperti yang sudah kita pelajari di materi sebelumnya.

//?REST memisahkan peran client dan server, bahkan keduanya tidak harus 
saling mengetahui, artinya ketika terjadi perubahan besar sisi client, tidak akan berdampak
pada sisi server, begitu juga sebaliknya.
*/
/**\
//!REST API
RESTful API === REST merupakan sebutan untuk webservices yang menerapkan arsitektur REST
REST juga merupakan API karena digunakan untuk menjembatani antara sistem yang berbeda (client and server)
//!API => Application Program Interface
adalah //*antarmukan yang menjadi perantara antar sistem aplikasi yang berbeda.
//*API tak hanya bentuk Web Service, bisa saja berupa SDK(software Development Kit) ataupun lainnya
//! Sifat yang menjadi kunci pada REST API
//* Client server
komunikasi antara client dan server dilakukan melalui protokol HTTP
//* Stateless
REST API tidak boleh menyimpan state/keadaan apa pun terkait client.
artinya tidak ada session di REST API. Permintaan yang dilakukan harus mengandung info yang jelas
jangna harap RESTful API akan menyimpan informasi dari permintaan sebelumnya untuk digunakan di permintaan selanjutnya
//* Cacheable
agar dapat merespon permintaan dengan cepat, REST API menerapkan prinsip cache sehingga setiap permintaan tidak melulu mengambil dari database
//* layered
REST API server memiliki arsitektur yang kompleks, client seharusnya tidak perlu tahu bagaimana server melayaninya
//! 4 Point yang harus diperhatikan 
format request dan response
HTTP Verbs/Methods
HTTP Response code
URI Design

//!FORMAT REQUESt DAN RESPONSE
REST API seringnya menggunakan JavaScript Object Notation atau JSON
sebagai format data baik itu pada request ataupun response.
JSON merupakan format dtandar dalam transaksi data.

agar REST API selalu merespons dengan format JSON, pastikan setiap
respons terdapat properti //?Content-type : application/json

*/