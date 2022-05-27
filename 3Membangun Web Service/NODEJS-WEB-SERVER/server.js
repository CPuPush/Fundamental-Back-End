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
    res.end('<h1>Hallo HTTP SERVER</h1>');
};
const server = http.createServer(requestListener);

server.listen(port, host ,()=>{
    console.log(`Server running on http://${host}:${port}`);
});