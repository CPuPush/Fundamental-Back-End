/*
HTTP/HTTPS merupakan salah satu protokol yang dapat digunakan untuk berinteraksi
dengan web server. Protokol tersebut terkenal dengan pola //*request, response

Informasi pada request dapat mengandung : 
1. Request Line : berisikan method/verb seperti GET(mengambil data),
POST(menambah/mengirim data),PUT(memperbaharui data), DELETE(menghapus data);
path atau alamat yang diminta dan versi HTTP yang digunakan.

2. Header : memuat informasi yang dilampirkan terkait request seperti format dokumen
contoh application/json , text/html, dsb

3. Body(opsional) : mengandung data yang dibutuhkan oleh server, bisa dalam
bentuk teks, JSON, dll. Body tidak wajib dilampirkan bila server tidak membutuhkan
data apapun.

informasi yang dilampirkan oleh respons:
1. Status line: berisi 2 digit angka
2. Header : mengandung infromasi yang dilapirkan terkait response seperti format dokumen
3. Body(optional, namun biasanya selalu dilampirkan) : 
membuat data yang dikirimkan oleh server. Data dapat berupa HTML, JSON, gambar, dsb.

respon negatif merupakan respons dari server ketika sebuah permintaan dari client gagal dipenuhi.

Sebuah request berhasil bila status code response diawali dengan angka 1, 2 atau 3, 
selain itu request gagal dieksekusi.

*/