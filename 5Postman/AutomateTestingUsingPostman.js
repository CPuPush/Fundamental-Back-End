/*//! Postman bisa melakukan uji secara
sehingga tak perlu lagi melihat respons dari server secara manual untuk memastikan responnya sesuai
dengan harapan. Pengujian otopatis di postman menggunakan kode JS, serupa dengan unit dan integration testing
yang sudah dipelajari.

melalui testing otomatis ini kita bisa menguji nilai dari status code, properti header, hingga body respons.
pengujian otomatis akan pass(berhasil) ketika semua variable yang diuji sesuai ekspektasi.
//? fitur Collection dan Environtment di postman akan digunakan dalam pengujian.
*/

/*//! Postman Collection
Postman collection merupakan tempat menyimpan kumpulan request. Kita bisa menganggap
collection adalah sebuah folder yang menyimpan berkas, namun brekas itu adalah request. setiap
request yang anda kirim di postman sebenarnya akan tampak pada tab history di sidebar.

dalam penggunaan ringan, memilih dan menggunakan kembali request melalui History merupakan pengalaman
yang cukup nyaman. Namun bila anda banyak melakukan request, hostory request akan menumpuk tidak karuan.
Dengan begitu, anda akan membutuhkan waktu yang lama untuk memilah dan memilih request yang ingin 
digunakan kembali.

Dengan adanya collection request bisa anda kelompokkan sehingga lebih mudah untuk diakses 
contoh collection notes API Test.
tambahkan pada collection yang ingin di test,
*/
/*//! Postman Environment
Environment merupakan kumpulan dari variabel yang dapat digunakan pada request di Postman. 
Ketika melakukan pengujian otomatis, terkadang kita perlu menyimpan nilai pada sebuah variable.
Contohnya ketika melakukan request menambahkan catatan, kita akan mendapatkan id catatan 
tersebut dari server. Id tersebut perlu disimpan pada variabel agar dapat digunakna oleh request selanjutnya.

variabel tak hanya digunakan untuk kasus tersebut saja, melainkan dapat juga untuk menyimpan nilai
token, auth-key, atau nilai lainnya yang dipakai selama proses uji.

masukkan variabel "noteId" pada environment 
untuk menggunakan variabel environment pada request, bungkus nama variabel yang dengan //? {{noteId}}

Notasi tersebut dapat digunakan di request URL, parameters, headers, dan body data
*/
/*//! Skenario Pengujian Otomatis
Skenario 1: Adding Notes (Memasukkan catatan baru)
Pastikan response memiliki status code 201.
Pastikan header response Content-Type memiliki nilai application/json.
Pastikan body response adalah object.
Pastikan body response memiliki properti dan nilai yang sesuai.
Pastikan data pada response body memiliki noteId dan nilainya tidak kosong.

Skenario 2: Getting All Notes (Mendapatkan seluruh catatan)
Pastikan response memiliki status code 200.
Pastikan header response Content-Type memiliki nilai application/json.
Pastikan body response adalah object.
Pastikan body response memiliki properti dan nilai atau tipe data yang sesuai.
Pastikan data pada response body memiliki array notes dan terdapat minimal 1 item di dalamnya.

Skenario 3: Getting Specified Note (Mendapatkan catatan secara spesifik)
Pastikan response memiliki status code 200.
Pastikan header response Content-Type memiliki nilai application/json.
Pastikan body response merupakan object.
Pastikan body response memiliki properti dan nilai atau tipe data yang sesuai.
Pastikan data pada response body memiliki properti note yang merupakan sebuah objek.
Pastikan objek note di dalam data memiliki properti id, title, body, dan tags  dengan nilai yang sesuai.

Skenario 4: Update Note (Memperbarui data catatan)
Pastikan response memiliki status code 200.
Pastikan header response Content-Type memiliki nilai application/json.
Pastikan body response adalah object.
Pastikan body response memiliki properti dan nilai yang sesuai.
Ketika mengakses catatan yang diperbaharui
Pastikan catatan yang diperbarui memiliki nilai terbaru.

Skenario 5: Delete Note (Menghapus catatan)
Pastikan response memiliki status code 200.
Pastikan header response Content-Type memiliki nilai application/json.
Pastikan body response adalah object.
Pastikan body response memiliki properti dan nilai yang sesuai.
Ketika mengakses catatan yang dihapus
Pastikan catatan yang dihapus tidak ditemukan.

//! Skenario Adding Notes
postman memiliki global object pm. Untuk membuat testing , gunakan method //?pm.test().
method tersebut menerima 2 parameter, yang pertama nama tes, dan yang kedua adalah spec function.
Method test() mirip seperti method it() pada Jest
//*Pastikan response memiliki status code 201.
pm.test('response status code should have 201 values'=>{
    pm.response.to.have.status(201);
})
//*Pastikan header response Content-Type memiliki nilai application/json.
pm.test('response Content-Type header should have application/json value',()=>{
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json')
});
//*Pastikan body response adalah object.
pm.test('response body should be an object',()=>{
    // mendapatkan resonse body dalam bentuk json
    const responseJSON = pm.response.json();
    pm.expect(responseJSON).to.be.an('object')
});
//*Pastikan body response memiliki properti dan nilai yang sesuai.
pm.test('response body should have the correct property and value',()=>{
    const responseJSON = pm.response.json();

    pm.expect(responseJSON).to.ownProperty('status');
    pm.expect(responseJSON.status).to.equals('success');

    pm.expect(responseJSON).to.ownProperty('message');
    pm.expect(responseJSON.message).to.equals('Catatan berhasil ditambahkan');

    pm.expect(responseJSON).to.ownProperty('data');
    pm.expect(responseJSON.data).to.be.an('object');
});

//*Pastikan data pada response body memiliki noteId dan nilainya tidak kosong.
pm.test('response body data should have noteId property and not equals to empty',()=>{
    const resopnseJSON = pm.response.json();
    const {data} = resopnseJSON;

    pm.expect(data).to.ownProperty('noteId');
    pm.expect(data.noteId).to.not.equals('');
});

permintaan menambah catatan baru, respons akan mengembalikan noteId dari catatan baru tersebut. 
simpan nilainya pada environtment variabel noteId agar nilainya dapat digunakan pada
scenario pengujian selanjutnya.
Untuk menyimpan nilai pada variabel environtment, kita bisa gunakan method //?pm.environment.set()
Method tersebut meneruma 2 parameter, yakni nama variabel dan nilai yang akan di tetapkan padanya.
//? pm.environment.set('noteId', data.noteId);

pengujian gagal dimana Content-Type bukan application/json namun application/json;charset=utf-8
fixing:
pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8')

maka dataId sudah otomatis terkirim
*/