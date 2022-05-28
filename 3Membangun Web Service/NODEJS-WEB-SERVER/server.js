const http = require('http');

//create port and host to listen() method
const port = 3000;
const host = 'localhost';

const requestListener = (req, res)=>{
    //menanggapi document html
    res.setHeader('Content-type', 'text/html');
    //status code 
    res.statusCode = 200;
    //menampilkan halo http server
    const {method} = req;

    if(method == "GET"){
        //response ketika GET
        res.end(`<h1>GET</h1>`)
        
    }
    if(method == "POST"){
        //response ketik POST
        res.end(`<h1>POST</h1>`)
        
    }
    if(method == "PUT"){
        //response put
        res.end(`<h1>PUT</h1>`)
        

    }
    if(method == "DELETE"){
        //response ketika DELETE
        res.end(`<h1>DELETE</h1>`)
        
    }

};
const server = http.createServer(requestListener);

server.listen(port, host ,()=>{
    console.log(`Server running on http://${host}:${port}`);
});