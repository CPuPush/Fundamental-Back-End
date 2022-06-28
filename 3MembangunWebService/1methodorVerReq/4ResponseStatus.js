//!this file contains theory only. response code comes from RoutingRequest file.
/*
respons yang dibawa oleh server dibagi menjadi 3 bagian penting.
yang pertama status line, atau bisa kita sebut response status, yang kedua
response header dan yang ketiga response body. kita bahas mulai dari response status dahulu.

Response status merupakan salah satu bagian dari respons yang berisikan tentang infromasi
apakah sebuah request berhasil atau gagal dilakukan. 
status yang diberikan berupa code dan status message 
100-199 : informational responses.
200 - 299 : successful responses.
300-399 : redirect.
400-499 : client error.
500-599 : server errors.
dilakukan melalui property //?response.statusCode

status message memiliki nilai standar sesuai dengna response code. Namun, kita bisa
mengubahnya bila diperlukan. Untuk mengubah status message, menggunaknan
//* response.statusCode = 404
//* response.statusMessage = 'user not found'
*/

/*
$ curl -X GET http://localhost:3000/test -i
//*HTTP/1.1 200 OK
Content-Type: text/html
Date: Tue, 28 Jun 2022 08:19:10 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 53

code always response 200 OK eventhough the url is not true.

hal ini karene reponse.statusCode = 200;

bila halaman tidak ditemukan //?404 pada status code
bila halaman tidak bisa diakses menggunakan method tertentu //? 400
if correct //?200
*/