/*
Ketika client melakukan permintaan dengan method POST atau PUT, biasanya permintaan
tersebut memiliki sebuah data yang disimpan pada body request.
data pada body bisa berupa format teks, JSON, berkas gambar, atau format lainnya.
data tersebut nantinya digunakan oleh server untuk diproses di database atau disimpan dalam bentuk objek utuh.

//?http.clienRequest merupakan turunan dari readable stream, yang dimana untuk mendapatkan
data body akan sedikit sulit dibandingkan dengan mendapatkan data header.
Data di body didapatkan dengan teknik stream, seperti yang sudah kita ketahui, teknink ini
memanfaatkan EventEmitter untuk mengirimkan bagian dagian datanya,
//*http.clientRequest event data dan end yang digunakan untuk mendapatkan data body
*/
const requestListener = (request, response)=>{
    let body = [];
    request.on('data', (chunk)=>{
        body.push(chunk);
    });

    request.on('end', ()=>{
        body = Buffer.concat(body).toString;
    });
}
/*
//!Bedah code
deklarasi variable body dan inisialisasikan nilainya dengan array kosong,
berfungsi untuk menampung buffer pada stream.

ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data)
yang dibawa callback function pada event tersebut

ketika proses stream berakhir, maka event end akan terbangkitkan. Disinilah kita mengubah
variable body yang sebelumnya menampung buffer menjadi data yang sebenarnya dalam
bentuk string melalui perintah Buffer.concat(body).toString()
*/