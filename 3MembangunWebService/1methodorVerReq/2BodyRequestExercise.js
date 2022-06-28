const http = require('http');

const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;

    if(method === 'GET'){
        response.end('<h1>Hello</h1>')
    }

    if(method === 'POST'){
        let body = [];
    
        request.on('data', (chunk) => {
            body.push(chunk);
        });
       
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const name = JSON.parse(body).name;
            // const {name} = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }
};

const server = http.createServer(requestListener);
const port = 8080;
const host = 'localhost';

server.listen(port, host,()=>{
    console.log(`server http://${host}:${port}`);
});

//curl -X POST -H "Content-Type: application/json" http://localhost:8080 -d "{\"name\": \"Dicoding\"}"
/*
hasil masih berupa json
<h1>Hai, {"name": "Dicoding"}!</h1>
kita bisa menggunakan //?JSON.parse() untuk mengubah JSON string menjadi Javascript object.
*/