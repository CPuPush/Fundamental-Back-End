/*
fungsi request listener menyediakan 2 parameter yakni request and response
parameter request merupakan instance dari //?http.ClientRequest 
dengan banyak properti didalam.

melalui properti ini kita dapat mengetahui seperti apa kerakteristik dari permintaan 
HTTP yang dilakukan leh client. seperti method yang digunakanm path, alamat yang dituju
data yang dikirimkan (bila ada) dan informasi lain mengenai permintaan tersebut.
untuk mendapatkan nilai method dari request bisa menggunakan request.method
*/
// const requestListener  = (request, response)=>{
//     // const method = request.method;
//     const {method} = request;
//     if(method === 'GET'){
//         //response get
//     }
//     if(method === 'POST'){
//         //response post

//     }

// };
/*
//?property method bernilai tipe method dalam bentuk string.
Nilainya GET POST PUT DELETE. sesuai dengna yang client gunakan ketika melakukan permintaan.

*/
//!=================================
const http = require('http');
const port = 8080;
const host = 'localhost';
const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const method = request.method;
    if(method === "GET"){
        response.end('<h1>This is GET</h1>')
    }
    if(method === "POST"){
        response.end('<h1>This is POST</h1>')
    }
    if(method === "PUT"){
        response.end('<h1>This is PUT</h1>')
    }
    if(method === "DELETE"){
        response.end("<h1>THIS IS DELETE</h1>")
    }
};

const server = http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`Server : http://${host}:${port}`);
})

/*
curl -X GET http://localhost:8080
//? output: <h1>this is get</h1>
curl -X POST http://localhost:8080
//? output: <h1>this is post</hai>
curl -X PUT http://localhost:8080
//? output: <h1>this is put</h1>
curl -X DELETE http://localhost:8080
//? output: <h1>this is delete</h1>
*/

