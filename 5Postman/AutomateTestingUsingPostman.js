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

//! Skenario Getting All Notes
//* Pastikan response memiliki status code 200.
pm.test('response status should have 200 value',()=>{
    pm.response.to.have.status(200);
});
//* Pastikan header response Content-Type memiliki nilai application/json.
pm.test('response Content-Type header should have application/json value',()=>{
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
});
//* Pastikan body response adalah object.
pm.test('response body should an object',()=>{
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
});
//* Pastikan body response memiliki properti dan nilai atau tipe data yang sesuai.
pm.test('response body should have the correct property and value',()=>{
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('data');
    pm.expect(responseJson).to.be.an('object');
});
//* Pastikan data pada response body memiliki array notes dan terdapat minimal 1 item di dalamnya.
pm.test('response body data should have a notes array and contain at least 1 item',()=>{
    const responseJson = pm.response.json();
    const {data} = responseJson;
    pm.expect(data).to.have.ownProperty('notes');
    pm.expect(data.notes).to.be.an('array');
    pm.expect(data.notes).lengthOf.at.least(1);
});
pengujian dilakukan bahwa notes harus memiliki minimal 1 item
*/
/*//! Scenario Getting Specified Note
//* Pastikan response memiliki status code 200.
pm.test('response status code should have 200 value',()=>{
    pm.response.to.have.status(200);
});
//* Pastikan header response Content-Type memiliki nilai application/json.
pm.test('response Content-Type should have application/json value',()=>{
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8')
});
//* Pastikan body response merupakan object.
pm.test('response body should object',()=>{
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object')
});
//* Pastikan body response memiliki properti dan nilai atau tipe data yang sesuai.
pm.test('response body should have the correct property and value',()=>{
    const responseJson = pm.response.json();

    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('data');
    pm.expect(responseJson.data).to.be.an('object');
    
});
//* Pastikan data pada response body memiliki properti note yang merupakan sebuah objek.
pm.test('response body data should containt note object',()=>{
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.ownProperty('data');
    pm.expect(responseJson.data).to.be.an('object')
});
//* Pastikan objek note di dalam data memiliki properti id, title, body, dan tags  dengan nilai yang sesuai.
pm.test('note object should containt correct value for id, title, tags, body property',()=>{
    const responseJson = pm.response.json();
    const {data:{note}} = responseJson;

    const expectedId = pm.environment.get('noteId');
    const expectedTitle = 'Catatanku';
    const expectedTags = ['Android', 'Web'];
    const expectedBody = 'Isi dari catatan A';

    pm.expect(note).to.have.ownProperty('id');
    pm.expect(note.id).to.equals(expectedId);

    pm.expect(note).to.have.ownProperty('title');
    pm.expect(note.title).to.equals(expectedTitle);
    
    pm.expect(note).to.have.ownProperty('tags');
    pm.expect(note.tags).to.eql(expectedTags);

});
//?equals => eql pada pengujian expectedTags
Hal ini karena untuk pengujian nilai object dan array 
kita tidak bisa menggunakan method equals().
itu karena array dan objek tidaka bisa disamakan secara identik 
walaupun ia memiliki item properti dan nilai yang sama persis.
pengujian dilakukan dengan repl
["Harry", "Potter"] === ["Harry", "Potter"]
// -> false
untuk cara pengujian dilakukan //?deep equals
deep equals paling sederhana dapat dilakukan menggunakan bantuan JSON.stringify. 
lebih jelasnya kedua objek atau array yang akan diuji diubah menjadi JSON string kemudian kedua
JSON string tersebutlah yang akan diuji nilainya.
//?JSON.stringify(["Harry", "Potter"]) === JSON.stringify(["Harry", "Potter"]);
pada postman cukup ganti equals()=>eql
*/
/*//! Scenario Update Note
//* Pastikan response memiliki status code 200.
pm.test('response status code should have 200 value',()=>{
    pm.response.to.have.status(200)
});
//* Pastikan header response Content-Type memiliki nilai application/json.
pm.test('response Content-Type header should have application/json value',()=>{
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8')
});
//* Pastikan body response adalah object.
pm.test('response body should be an object',()=>{
    const responsJson = pm.response.json();
    pm.expect(responsJson).to.be.an('object');
});
//* Pastikan body response memiliki properti dan nilai yang sesuai.
pm.test('response body should have correct property and value',()=>{
    const responseJson = pm.response.json();

    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('message');
    pm.expect(responseJson.message).to.equals('catatan berhasil diperbaharui')
});
//* Ketika mengakses catatan yang diperbaharui Pastikan catatan yang diperbarui memiliki nilai terbaru.
pm.test('when request the updated note',()=>{
    //dapatkan id dari environment
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response)=>{
        if(!error){
            pm.test('then the updated note should contain the latest data',()=>{
                const responseJson = response.json();
                const {data:{note}} =responseJson;

                const expectedTitle = 'Catatan A Revised';
                const expectedTags = ['Android', 'Web'];
                const expectedBody = 'Isi dari Catatan A Revised';

                pm.expect(note.title).to.equals(expectedTitle);
                pm.expect(note.tags).to.eql(expectedTags);
                pm.expect(note.body).to.equals(expectedBody);
            });
        }
    });
});
buat request ke http://localhost:5000/note/${noteId} dengan method //?pm.sendRequest()
sendRequest menerima 2 parameter, dimana request URL dan fungsi response callback.
ketika parameter error yang berada di response callback akan terisi nilainya. namun bila perminttan berhasil dilakukan
dan mendapatkan reponse dari server, maka parameter response lah aygn terisi nilainya.
pola ini disebut //?error first.
dimana callback function mendahulukan parameter error dibandingkan dengan ketika operasi berhasil dijalankan.
Node.js banyak menerapkan pola ini pada sebuha callback.

ketika tidak ada error maka pengetesan untuk data yang diupdate akan dilakukan
sama halnya menurut saya bahwa //* ketika put untuk data terakhir terkirim, maka dilakukan test untuk status, message,
//*json, code 
*/
/*//! Delete Note
Skenario 5: Delete Note (Menghapus catatan)
//* Pastikan response memiliki status code 200.
pm.test('response status code should have 200 value', () => {
    pm.response.to.have.status(200);
});
//* Pastikan header response Content-Type memiliki nilai application/json.
pm.test('response Content-Type header should have application/json value', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8')
}); 
//* Pastikan body response adalah object.
pm.test('response body should be an object', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
});
//* Pastikan body response memiliki properti dan nilai yang sesuai.
pm.test('response body should have correct property and value', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('message');
    pm.expect(responseJson.message).to.equals('catatan berhasil dihapus');
});
//* Pastikan catatan yang dihapus tidak ditemukan, Ketika mengakses catatan yang dihapus.
pm.test('whem request the deleted note',()=>{
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`,(error, response)=>{
        if(!error){
            pm.test('the deleted note should be not found',()=>{
                pm.expect(response.code).to.equals(404);
                const responseJson = response.json();
                pm.expect(responseJson.status).to.equals('fail');
                pm.expect(responseJson.message).to.equals('catatan tidak ditemukan');
            });
        }
    });
});
sendRequest mencoba mendapatkan nilai dari id noteId,//?(get spesified note) jika tidak mendapatkan 
response dari error maka nilai tidak akan ada
karena ada repsonse dari server ketika noteId tidak ada
maka dibuat condition ketika !error, maka code 404, status:'fail' dan message 'catatan tidak ditemukan'
*/


/*//! Menjalankan Seluruh Permintaan pada collection
keuntungan mengelopokkan perminaan menggunakan collection bisa menjalankan permintaan permintan
secara berurutan dengan sekali klik //? run.


*/