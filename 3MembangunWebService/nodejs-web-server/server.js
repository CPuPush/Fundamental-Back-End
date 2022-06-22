const http = require('http');
const port = 8080;
const host = 'localhost';
/*
http module memiliki banyak member seperti objek, properti atau method
yang berguna untuk melakuka hal hal terkait protokol HTTP.
member yang penting //*http.createServer()=> berfungsi membuat http server
*/
/**
 * logika untuk menangani dan menanggapi request 
 * @param request : objek yang berisikan informasi terkait permintaan
 * @param response : objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>')
};  
const server = http.createServer(requestListener);
server.listen(port, host,()=>{
    console.log(`server listening : http://${host}:${port}`);
});
/*
//*Request
objek ini kita bisa meilhat alamat yang diminta, data yang dikirim, ataupun
HTTP metode yang digunakan oleh client.

//*response
menanggapi permintaan. melalui objek ini kita bisa menentukan data yang diberikan,
format dokumen yang digunakan, kode status, atau informasi response lainnya.
*/

/*
Request listener akan menanggapi setiap permintaan dengan dokumen HTML, 
kode status 200, dan menampilkan konten "halo HTTP server";
*/
/*
cara server selalu sedia menangani permintaan yang masuk
setiap instance dari http.server juga memiliki method listen().
method inilah yang membuat http.server selalu standby untuk menangani
permintaan yang masuk dari client. setiap kali ada permintaan yang masuk,
req listnener akan tereksekusi.
*/
//!method listen() have 4 parameter
/*
port(number)=> jalur yang digunakan untuk mengakses HTTP server
hostname(string)=> nama domain yang digunakan oleh HTTP server
backlog(number)=> maksimal koneksi yang dapat ditunda (pending) pada HTTP server
listeningListener(function)=> callback yang akan terpanggil
ketika HTTP server sedang bekerja(listening)

//?overall programming just using this
server.listen(port,hostname,()=>{

});
*/