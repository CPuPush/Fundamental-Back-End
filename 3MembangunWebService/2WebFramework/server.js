const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const init = async()=>{
    const server = Hapi.server({
        port : 8080,
        host : 'localhost'
    });
    //route
    server.route(routes);  

    await server.start();
    console.log(`Server running ${server.info.uri}`);
};
init();

/*
//! 1. Method/ Verb request routing
Routing pada hapi memanfaatkan //?object route configuration yang disimpan pada method server.route().
Object route configuration memiliki properti yang bisa dimanfaatkan untuk menspesifikasikan route yang diinginkan.
termasuk method, path, dan fungsi sebagai handler untuk menangani permintaan tersebut,
request handler dituliskan didalam route configuration. handler pada Hapi dipisahkan berdasarkan route yang ada
setiap spesifikasi route memiliki handlernya masing-masing. //*goodbye if else bersarang. :D

cara menetapkan lebih dari satu royte configuration dalam methdo server.route() dengan menerima array dari route configuration
jadi anda bisa dengan mudah menentukan banyak spesifikasi route.

rekomendasi untuk memisahkan seluruh routes config pada berkas JS berbeda, dengan begitu satu berkas JS hanya memiliki satu 
fungsi atau tanggung jawab saja //?(single responsibility principle) 

pada method gunakan * untuk mencocokkan semua http method. artinya route dapat mengakses seluruh method
selain method yang match pada path.

route : '/{any*}'=> berungsi menangani permintaan masuk pada path yang belum di tentukan, ini merupakan
teknik dalam menetapkan routing yang dinamis menggunakan Hapi.
namun akan kalah kuatnya dengan nilai yang ditetapkan secara spesifik.
*/