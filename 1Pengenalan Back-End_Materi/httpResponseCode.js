/** //* HTTP RESPONSE CODE
 * //! Status-Line merupakan salah satu bagian dari HTTP Response
200 (ok) permintaan client berhasil dijalankan
201 (Created) : server berhasil membuat / menambahkan resource yang diminta client
400 (Bad Request): Permintaan client gagal dijalankan karena proses validasi input client gagal
401 (Unauthorized) : permintaan client gagal. karena user belum melakukan autentikasi
403 (Forbidden) : karena user tidak memiliki hal akses ke resource yang diminta
404 (Not found) : resource yang diminta tidak ditemukan
500(Internal Server error) : gagal karena server mengalami error(membangkitkan exception)
 */