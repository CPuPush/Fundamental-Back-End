const http = require('http')
const routes = [
    {
        method : 'GET',
        path: '/',
        handler:(request, h)=>{
            return 'Homepage';
        }
    },
    {
        method: '*',
        path:'/',
        handler:(request, h)=>{
            const {method} = request;
            return `Halaman homepage tidak dapat diakses menggunakan ${method} method`;
        }
    },
    {
        method : 'GET',
        path: '/about',
        handler:(request, h)=>{
            return 'About Page';
        }
    },
    {
        method : '*',
        path: '/about',
        handler:(request, h)=>{
            const {method} = request;
            return `halaman about tidak dapat diakses menggunakan ${method} method`;
        }
    },
    {
        method : 'GET',
        path : '/hello/{name?}',
        handler : (request, h)=>{
            const {name = 'strange'} = request.params;
            const {lang} = request.query;
            //Bila path memiliki kueri lang dengan nilai id
            if(lang == 'id'){
                return `Hai, ${name}`;
            }
            return `Hello ${name}`
        }
    },
    {
        method:'*',
        path:'/{any*}',
        handler:(request, h)=>{
            const {method, url} = request;
            return `tidak dapat mengakses dengan ${method} dan ${url}`;
        }
    }
];

module.exports = routes;
/*
//!1 latihan
URL: ‘/’
Method: GET
    Mengembalikan pesan “Homepage”.
    Method: <any> (selain method GET)
    Mengembalikan pesan “Halaman tidak dapat diakses dengan method tersebut”.

URL: ‘/about’
    Method: GET
    Mengembalikan pesan “About page”.
    Method: <any> (selain method GET)
    Mengembalikan pesan “Halaman tidak dapat diakses dengan method tersebut”.

URL: <any> (selain “/’ dan “/about”)
    Method: <any>
    Mengembalikan pesan “Halaman tidak ditemukan”.

    
*/
/*
//!2 path parameter
membuat route dengan nilai path /hello/{name?}. bila client melampirkan nilai path parameter,
server harus mengembalikan dengan pesan hello name,
jika false maka hello stranger.

//!3 Query Parameters

menambah dukungan bahasa terhadap path /hello/{name} uamg sudah dibuat.
bila path tersebut memiliki kueri lang dengan nilai id, maka server akan menanggapi
dengan pesan "hai, ${name}" 
running example
curl -X GET http://localhost:5000/hello/dicoding?lang=id
// output: Hai, dicoding!
curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding!
*/