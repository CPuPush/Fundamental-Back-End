/**\
REST juga merupakan API karena digunakan untuk menjembatani antara sistem yang berbeda (client and server)
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
*/