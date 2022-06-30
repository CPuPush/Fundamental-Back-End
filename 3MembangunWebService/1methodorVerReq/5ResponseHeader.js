/*
Server bisa merespons dengan memberikan data dalam tipe (MIME types) lain, 
seperti XML, JSON, gambar, atau sekedar teks biasa. apapun mime types yang digunakan webserver wajib memberi tahu pada client

caranya lampirkan property //?Content-Type dengan nilai MIME types yang disisipkan pada header response.
Untuk menyisipkan nilai pada header response, gunakanlah method setHeader()
const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');
}
Jika Anda menetapkan header dengan properti yang tidak standar (lihat apa saja standard properti pada header) 
atau Anda buat nama propertinya secara mandiri, maka sangat disarankan untuk menambahkan huruf X di awal nama propertinya. 
*/
/*
//?Content-Type berfungsi untuk memberi tahu client seperti apa ia harus menampilkan data.
text/html=> client khususnya browser akan menampilkan data yang dikirimkan oleh respons akan di render atau ditampilkan
dalam bentuk HTML. itulah 
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
            response.end(`<h1>Ini adalah homepage</h1>`)
        }else{
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
        }
    }
    // *about
    else if(url==='/about'){
        // TODO 3: logika respons bila url bernilai '/about'
        if(method === "GET"){
            response.statusCode = 200;
            response.end(`<h1>Halo ini adalah halaman about</h1>`)
        }else if(method === 'POST'){
            let body = [];
            request.on('data',(chunk)=>{
                body.push(chunk)
            });
            request.on('end',()=>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(`halo, ${name}! ini adalah halaman about`)
            });
        }else{
            const resCod = response.statusCode = 400;
            response.end(`<h1>halaman ini tidak dapat diakses dengan ${method} request</h1>`)
        }
    }
    // * !root & about
    else{
        //TODO 1: Logika respons bila url bukan '/' atau '/about'
        response.statusCode = 404;
        response.end(`<h1>Halaman tidak ditemukan dengan url : ${url} !</h1>`)
    }
};
const server = http.createServer(requestListener);
const port = 3000;
const host = 'localhost';
server.listen(port, host, ()=>{
    console.log(`server : http://${host}:${port}`);
});
// $ curl -X GET http://localhost:3000 -i
// HTTP/1.1 200 OK
// Content-Type: application/json
// X-Powered-By: NodeJS

/*
karena server tidak lagi mengirimkan konten dalam bentuk HTML, maka browser tidak akan lagi menampilkan
dalam bentuk HTML. Karena mengubahnya menjadi format JSON
*/