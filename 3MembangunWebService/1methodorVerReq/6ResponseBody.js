/*
Header Respons menampung informasi terkait respons yang diberika oleh server. Informasi dapat berupa status respons,
MIME types, tanggal, atau informasi lainnya yang mungkin dibutuhkan oleh client.

namun tidak semua informasi cocok disimpan di header, Informasi di pada header hanya sebagai metadata atau informasi
yang menjelaskan tentang sebuah data lain(data utama)

http respons juga membawa body, didalam body inilah data utama (atau bisa kita sebut konten) seharusnya disimpan

object response yang berada pada parameter fungsi request listener adalah instance dari http.serverResponse.
Dimana ia merupakan writableStream. 
const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};

const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};

//!penting bahwa menuliskan status dan header response sebelum anda menuliskan data pada body.
Ketentuannya begini, setiap JSON yang akan kita kirimkan harus memiliki message. 
Nilai properti message akan diisi dengan pesan yang sebelumnya kita berikan dalam format HTML. 
Untuk lebih jelasnya, berikut contoh response body ketika client meminta halaman yang tidak ditemukan.
{
    "message": "Halaman tidak ditemukan!"
}


karena response.end() menerima string( atau buffer) maka kita perlu mengubah objek JS menjadi JSON string menggunakan JSON.stringify()
*/
const http = require('http');

const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    const {method, url} = request;
    // *root
    if(url==='/'){
        // TODO 2: logika respons bila url bernilai '/'
        if(method ==='GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message:`ini adalah root page`,
            }))
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message:'Halaman tidak ditemukan!'
            }));
        }
    }
    // *about
    else if(url==='/about'){
        // TODO 3: logika respons bila url bernilai '/about'
        if(method === "GET"){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message:`Ini adalah halaman about`
            }))
        }else if(method === 'POST'){
            let body = [];
            request.on('data',(chunk)=>{
                body.push(chunk)
            });
            request.on('end',()=>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message:`halo ${name} ini adalah halaman POST about`
                }))
            });
        }else{
            const resCod = response.statusCode = 400;
            // response.end(`<h1>halaman ini tidak dapat diakses dengan ${method} request</h1>`)
            response.end(JSON.stringify({
                message:`Halaman ini tidak dapat diakses dengan ${method} request`
            }));
        }
    }
    // * !root & about
    else{
        //TODO 1: Logika respons bila url bukan '/' atau '/about'
        response.statusCode = 404;
        // response.end(`<h1>Halaman tidak ditemukan dengan url : ${url} !</h1>`)
        response.end(JSON.stringify({
            message:'Halaman tidak ditemukan!'
        }));
    }
};
const server = http.createServer(requestListener);
const port = 3000;
const host = 'localhost';
server.listen(port, host, ()=>{
    console.log(`server : http://${host}:${port}`);
});

/*
curl -X GET http://localhost:5000/
// output: {"message":"Ini adalah homepage"}
curl -X GET http://localhost:5000/about
// output: {"message":"Halo! ini adalah halaman about"}
curl -X DELETE http://localhost:5000/
// output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}
*/