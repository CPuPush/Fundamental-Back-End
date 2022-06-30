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