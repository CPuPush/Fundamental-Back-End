const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');
const init = async()=>{
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes:{
      cors:{
        origin:['*'],
      },
    },
  });
  server.route(routes)
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();



/* //! 1. Kriteria Project
membangun restful API untuk aplikasi catatan sederhana. dimana aplikasi tersebut berfungsi untuk menyimpan(create),
melihat(read), mengubah (update), dan menghapus (delete).
//* Kriteria 1 - webserver dapat menyimpan catatan
web server dapat menyimpan catatan yang ditambahkan melalui app web. tidak perlu database, cukup disimpan pd memory server dalam
bentuk //?array JS.
{
 id: string,
 title: string,
 createdAt: string,
 updatedAt: string,
 tags: array of string,
 body: string,
},
contoh
{
 id: 'notes-V1StGXR8_Z5jdHi6B-myT',
 title: 'Sejarah JavaScript',
 createdAt: '2020-12-23T23:00:09.686Z',
 updatedAt: '2020-12-23T23:00:09.686Z',
 tags: ['NodeJS', 'JavaScript'],
 body: 'JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para pemrogram yang non-Java.',
},

agar web server dapat menyimpan catatan melalui app client, web server harus menyediakan route dengan 
//?path '/notes' dan method POST
dalam menyimpan atau menambah notes, client akan mengirimkan permintaan ke path dan method tersebut dengan membawa data //?JSON
pada request body
{
 "title": "Judul Catatan",
 "tags": ["Tag 1", "Tag 2"],
 "body": "Konten catatan"
}

untuk properti //?id, createAt, updateAt, harus diolah disisi server, jadi client tidak akan mengirimkan itu,
server harus memastikan properti id selalu unik.
Jika permintaan client berhasil dilakukan, respons dari server harus memiliki status code 201(created) dan mengembalikan
data dalam bentuk JSON dgn format:
{
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "V09YExygSUYogwWJ"
  }
}
bila gagal diberikan //?status 500 dan kembalikan dengan data JSON dengan format
{
  "status": "error",
  "message": "Catatan gagal untuk ditambahkan"
}

//* Kriteria 2 - Web server dapat menampilkan catatan
Web server mengirimkan seluruh atau secara spesifik data notes yang disimpan. 
kriteria ini mengharuskan webserver untuk mengirimkan seluruh atau secara spesifik data notes yang disimpan.

ketika permintaan client //?'/notes' method 'GET' maka server harus mengembalikan status code 200.
seluruh data notes bentuk array menggunakan JSON.
{
  "status": "success",
  "data": {
    "notes": [
      {
        "id":"notes-V1StGXR8_Z5jdHi6B-myT",
        "title":"Catatan 1",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 1"
      },
      {
        "id":"notes-V1StGXR8_98apmLk3mm1",
        "title":"Catatan 2",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 2"
      }
    ]
  }
}

jika belum ada catatn satu pun dalam array maka server mengembalikan data notes dengan nilai array kosong
{
  "status": "success",
  "data": {
    "notes": []
  }
}

client juga bisa melalukan permintaan untuk mendapatkan catatan secara spesifik. melalui path 
//? id /notes/{id} with 'GET' method dengan status 200 (OK)
nilai satu objek catatan dalam bentuk JSON seperti berikut
{
  "status": "success",
  "data": {
    "note": {
      "id":"notes-V1StGXR8_Z5jdHi6B-myT",
      "title":"Catatan 1",
      "createdAt":"2020-12-23T23:00:09.686Z",
      "updatedAt":"2020-12-23T23:00:09.686Z",
      "tags":[
        "Tag 1",
        "Tag 2"
      ],
      "body":"Isi dari catatan 1"
    }
  }
}

bila client melampirkan id catatan yang tidak ditemukan, server harus merespons dengan status code 404, dan data dalam bentuk
JSON seperti ini :
{
    "status": "fail",
    "message": "catatan tidak ditemukan"
}

//* Kriteria 3 - Web server dapat mengubah catatan
perubahan dapat berupa judul, isi ataupun tag catatan. 
client akan membuat permintaan //? '/notes/{id}', 'PUT'
serta membawa data JSON pada body request yang merupakan data catatan terbaru.
{
  "title":"Judul Catatan Revisi",
  "tags":[
    "Tag 1",
    "Tag 2"
  ],
  "body":"Konten catatan"
}

jika berhasil maka status //? 200 dan membawa data JSON object pada body respons:
{
  "status": "success",
  "message": "Catatan berhasil diperbaharui"
}
peubahan data catatan harus disimpan sesuai dengan id yang digunakan pada path parameter. bila id catatan tidak ditemukan, 
maka server harus meresons dengan status code 404(not found) dan data JSON :
{
  "status": "fail",
  "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
}

//* Kriteria 4 - Web server dapat mengahapus catatan.
untuk menghapus catatan, client akan membuat permintaan pada path //? 'notes/{id}' dengan method 'DELETE'.
status code 200(ok) serta JSON berikut
{
  "status": "success",
  "message": "Catatan berhasil dihapus"
}
if fail //? status code 404
{
  "status": "fail",
  "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
}
*/
/*//! 2. Menyelesaikan fitur Menyimpan catatan
1. agar web server dapat menyimpan catatan ia perlu menyediakan route dengan //? path '/notes' dan method 'POST'.
2. selanjutanya membuat array untuk menampung objek catatan pada berkas notes.js
3. selanjutnta pada route handler dibuat secara terpisah //?addNoteHandler()
4. client mengirim data title, tags, body yang akan disimpan dalam bentuk JSON melalui body request. using //? request.payload
5. property id merupakan string dan harus unik, kita akan menggunakan bantuan //?nanoid (npm install nanoid@3.x.x)
dimana merupakan salah satu library populer untuk menangani ini. versi 3, karena 4 tidak mendukung require, just import
6. createAt dan updateAt, nilai kedua properti tersebut seharusnya sama. jadi secara mudah memberi nilai
//? new Date().toISOString();
7. cara menentukan apakah newNote sudah masuk ke dalam array notes? kita bisa memanfaatkan method filter() berdasarkan id
catatan untuk mengetahuinya.
8. filter tersebut digunakan untuk membuat if else untuk digunakaan pada message succes atau fails
cara respon dilakukan pada h respons pada hapi
9. pada web apps terjadi error. CTRL+SHIFT+I akan muncul error
//? Access to fetch at 'http://localhost:8080/notes' from origin 'http://notesapp-v1.dicodingacademy.com' 
//? has been blocked by CORS policy: The request client is not a secure context and the resource is in 
//? more-private address space `local`
hal itu terjadi karena dihalangi oleh same-origin policy. 
*/

/*//! 3. Same-Origin Policy
ketika server menampung website, mungkin beberapa data gambar, video, stylesheet biasanya diambil dari alamat server lain atau
origin yang berbeda. contoh stylesheet yang diambil dari Bootsrap CDN ataupun gambar yang diperoleh dari server Unsplash.
hal ini wajar dan biasa dilakukan.
tetapi tidak semuda data bisa diambil dari origin yang berbeda.
ex data JSON yang didapatkan melalui teknik XMLHTTPRequest atau fetch. jika website meminta sesuatu menggunakan teknik tersebut dari luar 
originnya, maka permintaan tersebut akan ditolak. itudisebabkan oleh kebijakan same-origin. kasus ini terjadi pada app kita.

origin terdiri dari 3 hal //? protokol, host, port number. 
Origin dari app kita adalah //? http:/notesapp-v1.dicodingacademy.com
protokolnya dalah http://, hostnya notesapp-v1.dicodingacademy.com, dan port adalah :80 (implisit)

selama aplikasi client menganses data dari origin yang sama, hal itu dapat dilakukan. namun bila ada salah satu saja yang 
berbeda contohnya port 8001, maka permintaaan itu akan ditolak.

sehingga jelas penyebab gagalnya app client ketika melakukan permintaan ke web server yang kita buat. sudah jelas keduanaya 
memiliki origin yang berbeda. origin web server kita adalah http://localhost:8080/

solusi: mmenggunakan mekanisme Cross-origin resource sharing(CORS). pertanyaannya bagaimana?
pada web server, kita perlu memberikan nilai header //*'Access-Control-Allow-Origin' 
Dengan nilai origin luar yang akan mengkonsumsi datanya (app client).

const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
//* response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com'); 
atau
// * response.header('Access-Control-Allow-Origin', '*')
return response;

penerapan pada hapi jauh lebih mudah dengan, menerapkan 
{
  method:"POST",
  path: "/notes",
  handler : addNoteHandler,
  options:{
    cors:{
      origin:[*],
    }
  }
}

atau jika ingin menerapkan diseluruh route
const server = hapi.server({
  port:5000,
  host:'localhost',
  routes:{
    cors:{
      origin:[*]
    }
  }
})
disable "Block insecure private network requests" to access data from other origin (CORS)
//* chrome://flags/#block-insecure-private-network-requests
*/

/*//! 4. Menampilkan catatan
1. konfig route tetapkan path dengan nilai '/notes' dan method dengan nilai 'GET'
2. ketika klik atau path mengarah ke id, maka error. so we have to handle this
3. caranya dengan mendapatkan id dengan req.param, setelah itu id dari params url
dicocokkan dengan id dari notes,
*/
/*//! 5. Mengubah Catatan
Web server harus bisa mengubah catatan yang disimpan, baik perubahan pada title, tags, atau body.
ketika melakukan perubahan client akan mengirimkan permintaan ke route //?'notes/{id}'
dengan method 'PUT'dan membawa objek baru ke body request.
1.  mendapatkan id dari request param
2. mendapatkan title, tags, body
3. memperbaharui updateAt using new Date().toISOString;
4. selanjutnya memanfataakan indexing array pada objek catatan sesuai ID yang ditentukan. untuk menggunkaakannya
//?findIndex()
5. bila note dengan id yang dicari ditemukan makan index akan bernilai array index dari objek catatan yang dicari.
bila tidak ditemukan maka index bernilai -1. so we can use this to make conditional.
*/
/*//! 6. Menghapus Catatan
1. menghapus dengan route path '/notes/{id}', method 'DELETE'
2. pada handler kita cari pada index ke berapa id dari params itu berada pada notes 
3. lakukan pengkondisian untuk mekakukan penghapusan index
*/