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
    //*path: '/users/{username?}',
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
*/

/*
//! 4. Body/payload Request
ketika menggunakan nodejs untuk mendapatkan data pada body request meskipun datanya hanya sebatas teks, 
kita harus berurusan dengan Readable Stream.
dimana untuk mendapatkan data melalui stream tak semudah seperti kita menginisialisasikan sebuah nilai pada variable.
ketika menggunakan Hapi, tidak lagi berurusan dengan stream untuk mendapatkan datanya. dibalik layar, hapi secara default akan mengubah
payload JSON menjadi objek JS. sehingga tidak lagi berurusan dengn JSON.parse()
kapanpun client mengirimkan payload berupa JSON, payload tersebut dapat diakses pada route handler melalui properti
request.payload
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});
contoh diatas handler menerima payload melalui request.payload. Dalam kasusm client mengirimkan data login dgn struktur
{"username":"harrypotter", "password":"encryptedpassword"}

//! 5. Response Toolkit
fungsi handler pada hapi memiliki 2 paramter, request dan h.

request parameter merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters,
payload, headers, dsb.
h yaitu huruf inisial Hapi. Parameter ini merupakan response toolkit dimana ia adalah objek 
yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client. Objek ini serupa
dengan objek response pada request handler ketika kita menggunakan NodeJS native.

jika ingi mengembalikan nilai pada sebuah permintaan yang datang,
//*di Hapi bisa secara langsung mengembalikan nilai dalam bentuk teks, HTML, json steam bahkan promise.
sehingga kapan dibutuhkan h?
bila kasusnya sederhana, memang lebih baik langsung kembalikan nilai secara eksplisit
sehingga selalu bernilai 200 OK. ketika butuh mengubah niali status response, disitulah membutuhkan paramter h.
server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        //?return h.response('created').code(201);
    },
});
parameter h tidak berfungsi menetapkan status kode respons. melalui h, kita juga bisa menetapkan header response, content type,
content length dan masih banyak lagi.
// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};


*/