/*
//*Routing adalah istilah dalam menentukan respons server berdasarkan path atau url

dalam http.clientRequest, untuk mendapatkan nilai url sangatlah mudah,
semudah kita mendapatkan nilai request method yang digunakan.

const {url} = request.

properti url akan mengembalikan nilai path secara lengkap tanpa host dan port.
http://localhost:5000/about/, maka url akan bernilai ‘/about’; 
bila meminta alamat http://localhost:5000 atau http://localhost:5000/, 
maka url akan bernilai ‘/’.
*/
const http = require('http');

const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method, url} = request;
    // *root
    if(url==='/'){
        // TODO 2: logika respons bila url bernilai '/'
        if(method ==='GET'){
            response.end(`<h1>Ini adalah homepage</h1>`)
        }else{
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
        }
    }
    // *about
    else if(url==='/about'){
        // TODO 3: logika respons bila url bernilai '/about'
        if(method === "GET"){
            response.end(`<h1>Halo ini adalah halaman about</h1>`)
        }else if(method === 'POST'){
            let body = [];
            request.on('data',(chunk)=>{
                body.push(chunk)
            });
            request.on('end',()=>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`halo, ${name}! ini adalah halaman about`)
            });
        }else{
            response.end(`<h1>halaman ini tidak dapat diakses dengan ${method} request</h1>`)
        }
    }
    // * !root & about
    else{
        //TODO 1: Logika respons bila url bukan '/' atau '/about'
        response.end(`<h1>Halaman tidak ditemukan dengan url : ${url} !</h1>`)
    }
};
const server = http.createServer(requestListener);
const port = 3000;
const host = 'localhost';
server.listen(port, host, ()=>{
    console.log(`server : http://${host}:${port}`);
});

/*
//* how to run POST curl with accessing json in argument
curl -X POST -H "Content-Type : application/json" http://localhost:3000/about -d "{\"name\" : \"fori okto\"}"
*/