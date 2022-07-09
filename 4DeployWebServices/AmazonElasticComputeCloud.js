/*//! EC2 => layanan komputasi elastis di cloud yang ditawarkan oleh Amazon Web Service. 
Sederhananya EC2 merupakan sebuah komputer server yang dapat anda miliki namun tidak dapat and alihat fisiknya.
walaupun tak tampak secara fisik, komputer ini tetap bisa dioperasikan di mana saja karena ia disimpan di cloud 
yang notabene awan dapat dilihat dimana saja.

komputer server ini bersifat elastis karena ia dapat menyesuaikan kapasitasnya berdasarkan permintaan dari 
client, semakin banyak permintaan yang datang, semakin bersar kapasitar server.
dengan begitu, server tidak akan mengalami down jika tiba tiba bisnis membludak.

EC2 seelastis itu karena EC2 sejatinya adalah virtual komputer atau virtual machine yang dapat
diatur spesifikasinya melalui sebuah sistem tanpa harus berupaya dengan perangkat keras.
*/

/*//! Identity and Access Management(IAM)
akun yang sudah didaftarkan merupakan akun yang memiliki kekuatan super atau root user. artinya
akun tersebut mengakses seluruh resource atau service di AWS secara penuh tanpa ada batasan apapun.
root user terbentuk saat pertama kali membuat akun AWS. Terntu kredensial yang digunakan adalah kredensial 
yang kita masukkan ketika mendaftar akun AWS.

root user memiliki akses yang mutlak dan tidak dapat dibatasi. oleh karena itu 
AWS sangat merekomendasikan agar //?tidak menggunakan root user atau kredensialnya untuk interaksi sehari hari.

praktik terbaiknya, root user hanya digunakan satu kali saja, gunakan user ini untuk membuat //?IAM
atau akun yang lebih rendah haknya. tindakan ini diperlukan guna menghindari anda atau tim anda mengakses
resource yang tidak atau belum dibutuhkan, bahkan tidak boleh diakses.
AWS Services sangatlah luas, Sebagai developer mungkin kita hanya perlu berinteraksi dengan beberapa service saja
misalnya Amazon EC2, Amazon RDS, Amazon ElastiCache.
//?Principle of least Privilege=> berikan akses sesuai kebutuhan saat itu juga. 
*/
/*//! Membuat IAM Users
Setelah selesai membuat IAM USER
ada 3 opsi pemilihan permission
1. Add user to group
memilih opsi permission dengan cara memasukkan user ke group. Group ini berisi serangkain permission 
yang dapat diterapkan ke seluruh user yang berada dalam group. ini adalah cara terbaik untuk mengelola user permission 
berdasarkan job atau peran dari user tersebut.

2. Copy permission from existing user
memilih opsi permissin dari IAM user lain yang ada. Sayangnya saat ini kita belum membuat IAM user sama sekali.
jadi opsi ini masih belum bisa digunakan

3. Attach existing policies directly
Memilih opsi permission dengan cara langsung menunjuk permission apa saja yang berhak user akses. 
opsi ini bisa kita gunakan, namum akan sulit untuk mengelola permission ke depannya.

Create group, add group name, and give access to //?AmazonEC2FullAccess
ketika sudah selesai maka akan diberika csv. Didalamnya terdapat link, maka link itu yang digunakan
untuk login. Maka membuat akun IAM yang meiliki ful akses untuk services Amazon EC2  berhasil. dengan begitu
kita sudah layak menggunakna layanan Amazon EC2.
*/
/*//! Membuat dan Menjalankan Amazon EC2 Instance
all services => EC2 => lauch => add name => kemudian pilih application os images(ubuntu)
=> instance type t2.micro
create keypair new login key pair name : notes-api-webserver(example) =>  masukkan nama => 
kilk key pair = >pastikan .pem not .ppk letakkan didalam forder project
isi field dengan
Security group name : app-server-sg
allow custom TPC port 5000
isi security group dengan nilai:
type : Custom TCP
port range : 5000
Source type : Anywhere
Description : Application Port

then click launch Instance

Penjelasan dibagian network settings kita menentukan cara atau jalur apa saja untuk
mengakses EC2 instance yagn dibuat. Secara default AWS menambahkan SSH pada security group.
jalur SSH ini digunakan nanti oleh kita untuk mengoperasikan EC2 secara remote.

Selain SSH, kita juga menambahakan security group lainnya agar web server kita dapat diakses
secara public. yakni membuka TCP port 5000(sesuai dengan yang digunakan oleh webserver) dan sourcenya anywhere.
*/
/*//! Mengoperasikan EC2 Instance melalui SSH
1. click instance kemudian connect 
2. pergi ke ssh client kemudian copy perintah pada example, lalu paste perintah tersebut pada terminal dimana 
folder .pem diletakkan
3. tetapi akan ada problem ketika connect yaitu : 
you may not be able to connect to this instance as ports 22 may need to be open in order to be accessible. 
the current associated security groups don't have ports 22 open.
4. cara menyelesaikan cukup mudah4
    a. pergi ke Security group
    b. pada inbound rules, tambahkan ssh dengan port range 22
5. copy perintah example ssh pada powershell 
6. jika ada kendala dimana berkas notes-api-webserver.pem memiliki permission yang terlalu terbuka. ini tidak 
aman untuk digunakan sebagai kunci dalam mengakses EC2 instance.
solusi kita perlu mengubah permission pada berkas .pem tersebut. dengan mengeksekusi beberapa perintah sebagai berikut

$path = ".\notes-api-webserver.pem"
# Reset to remove explicit permissions
icacls.exe $path /reset
# Give current user explicit read-permission
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
# Disable inheritance and remove inherited permissions
icacls.exe $path /inheritance:r

kemudian masukkan kembali perintah pada example. maka instance sudah terhubung melalui ssh.
semua operasi dilakukan menggunakan command line pada linux.
*/ 

/*//! Mengkonfigurasi Kebutuhan pada EC2 Instance

*/