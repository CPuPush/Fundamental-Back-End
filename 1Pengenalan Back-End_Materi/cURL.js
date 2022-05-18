//!COMUNICATION BETWEEN CLIENT AND SERVER THROUGHT HTTP PROTOCOL
// * curl -X GET https://coffee-api.dicoding.dev/coffees -i
/**
curl = perintah untuk menggunakan program cURL pada terminal atau CMD
-X GET  = menetapkan HTTP method/verb yang kita gunakan.
http.... = alamat request
-i : memberikan informasi detail terhadap response

output
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{"message":"Berikut daftar kopi yang tersedia","coffees":[{"id":1,"name":"Kopi Tubruk","price":12000},{"id":2,"name":"Kopi Tarik","price":15000},{"id":3,"name":"Kopi Jawa","price":18000}]}

HTTP/1.1 => version
200 => status, 1,2,3 code diawali angka 2 artinya berhasil
Content-Type: application/json => tipe konten yang digunakan web server dalam memberikan data.
*/

// * curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i
/**
-X POST -> menggunakan method POST karema membeli bukan hanya meminta data, melainkan mengubah jumlah stok kopi
-H "Content-Type:application/json" -> menetapkan json pada header request.fungsi memberitahu server kita melampirkan data dalam bentuk JSON
-d <JSON  Content> -> data yang dilampirkan pada request.

output
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message":"Pesanan berhasil!","success":true}
 */

//?kondisi membeli kopi yang tidak tersedia
//* curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Mallavak\"}" https://coffee-api.dicoding.dev/transactions -i
/**
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8

{"message":"Pesanan gagal, kopi tidak ditemukan!","success":false}

status code  404 artinya gagal
 */