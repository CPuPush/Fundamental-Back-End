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

/*
//! 2. Path Parameter
bagaimana untuk membuat profil user yang sangat banyak, tentunya hal ini dilakukan dengan teknik path paramter.
Di Hapi framework teknik tersebut mudah untuk diterapkan. cukup dengan membungkus dengan {}
server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});
server memberikan bagian teks tersebut untuk client manfaatkan sebagai parameter
parameter ini akan disimpan sebagai properti pada request.params yang dimiliki handler dengan nama sesuai yang anda tetapkan (username)

pada hapi kita bisa membuat path parameter bersifat opsional. caranya dengan menambahkan tanda ?
//?{username?}
server.route({
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
        const { username = 'stranger' } = request.params;    
        return `Hello, ${username}!`;
    },
});
penting untuk Anda ketahui bahwa optional path parameter hanya dapat digunakan di akhir bagian path saja.
*/

/*
//! 3. Query Parameters
terdapat car alain yang sering digunakan untuk mengirimkan data melalui URL, yakni dengan query paramter. Teknik ini umum digunakan 
pada permintaan yang membutuhkan kueri dari client, contohnya seperti pencarian dan filter data.
data yang dikirim melalui query memiliki format key=value. contohnya 
//*localhost:8080?name=harry&location=bali
data yang dikirimkan melalu quert memiliki format key=value
pada hapi bisa mendapatkan nilai dari query pada parameter melalui request.query.
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        //?const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
});

running 

*/