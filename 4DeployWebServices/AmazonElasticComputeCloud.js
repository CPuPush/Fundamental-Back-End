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
Untuk mengunduh remote repository pada EC2 Instance, tenteu kita juga perlu memasang sistem git 
di EC2 instance. Good news, AMI yang kita gunakan(Ubuntu) telah terpasang sistem git secara built-in.
sehingga kita tidak perlu install git secar mandiri.

selanjutnya unduh proyek web server kita pada EC2. Proses unduh remote repository ke local 
repo dinamakan cloning
git clone pada ssh
untuk pengecekan, kita bisa menjalankan ls dan melakukan cd untuk melompat ke folder.
*/
/*//! Memasang Node.js dan menjalankan web server
kita melakukan check versi pada nodejs pada pp kita,
agar mudah mengatur versi Node.js yang digunakan pada EC2 instance, kita akan menggunakan tools uang bernama
nvm. melalui nvm ini, kita bisa dengan mudah mengubah versi Node.js yang ingin digunakan. Tools ini
sangat membantu proses upgrade atau downgrade Node.js secara mudah.
//?curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
selanjutnya install node js sesuai dengan versi yang ada di local
example //?nvm install v14.15.4

npm install pada ubuntu 
selanjutnya npm run start untuk menjalankan
*/
/*//! Memperbaiki Bugs
kita kira server sudah dapat dijalankan dengan baik oleh nodemon pada EC2 instance,tapi nyatanya masih belum
bisa diakses secara publik. 
setelah ditelaah lebih dalam,  ternyata IP yang kita kunjungi tadi bukanlah Ip publik dari EC2 instance
yang dapat diakses secara umum. lalu bagaimana cara mengetahui IP publik dari EC2 instance?
silahkan kunjungi kembali halaman daftar EC2 instance pada AWS management console, lalu pilih EC2 instance yang dibuat.
ternyata kita tidak bisa menggunakan host dengan nilai localhost untuk menjalankan Hapi server pada EC2 instance.
kita perlu menjelaskan secara eksplisit private IP yang digunakan oleh instance, di mana Ip 
tersebuh pada summary instance dijelankan bernilai //? 54.179.5.62

tetapi menetapkan nilai host dengan alamat IP yang eksplisit seperti itu bukanlah hal yang baik.
karena nilai IP baik publik atau private dapat berubah mungkin karena pindah server, atau restart server.
kita tidak dapat menjamin kapan perubahan tersebut bisa terjadi, apakah anda mau setiap kali IP berubah, kode
anda harus diubah juga 
//*solusi : 
gunakan IP beralamat  0.0.0.0 alamat tersebut merupakan alamat spesial yang digunakan agar komputers dapat
diakses melalui seluruh alamat IP yang digunakan pada komputer tersebut. misalnya komputer anda tersambung ke jaringan 
Wi-Fi dengan IP 192.168.100.25 dan LAN dengan IP 172.31.90.21 maka 0.0.0.0 dapat diakses melalui kedua alamat IP 
tersebut.

dengan begitu diproduction kita dapat menggunakan alamat spesial ini untuk menghindari masalah 
perubahan IP. karena bila alamat IP berubah, maka nilai 0.0.0.0 tetap aman untuk digunakan.

bila kita mengubah nilai localhost menjadi 0.0.0.0 bagaimana nasip ketika proses development kita 
menginginkan a hanya dapat dijalankan di localhost? apakah kita ubah saja nilai ip-nya secara manual pada
EC2 instance tanpa melalui remote repository ? itu bukan lah praktik yang baik ya ges ya

lalu adakah cara yang dapat membedakan penggunaan nilai ketika proses development dan production di EC2 instance?
ada yaitu dengan global objek //?process.env disana kita dapat meletakkan suatu nilai ketika proses node dijalankan.
//*host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',

Dengan begitu properti host akan bernilai sesuai dengan environment yang ditetapkan.
Selanjutnya kita tetapkan environment pada npm runner script pada package.json'
  //?"start-prod": "NODE_ENV=production node ./src/server.js",
  //?"start-dev": "nodemon ./src/server.js",
kita tidak perlu menetapkan NODE_ENV pada start-dev karena nodemon secara default menggunakan nilai development
pada NODE_ENV. karena itu juga, proses productin kita tidak menggunakan nodemon lagi. cukup node

inti dari pembicaraan ini adalah
kita membuat pemisalah untuk hostnya. ketika ingin running dari ssh, maka host menjadi 0.0.0.0 dengan start-prod.
keitka ingin run pada local, maka npm start start-dev, karena dengan sendirinya host akan di set menjadi localhost
npm run start-prod
sehingga akan muncul 0.0.0.0:5000
//? http://54.179.5.62:5000/notes
server run dalam production sehingga bisa digunakan untuk publik
*/
/*//! Process Manager
tentu saja kita harus selalu standby mengaktifkan npm run start-production
ketika tidak sengaja menonaktifkan, maka bisnis tidak bisa dijalankan, sungguh ini merupakan pendekatan yang salah.
maka untuk melakukan hal tersebut //?process Manager jawabannya.
Process manager dapat menangani permasalahan diatas. dengan menggunakan process manager, tidak perlu khawatir
bila applikasi node.js terhenti disebabkan oleh crash. ia akan menjalankan ulang prosesnya
secara otomatis hampir tanpa downtime. Process manager dapat membatu menyeimbangkan muatan process
pada CPU yang tersedia di server, hal ini biasa disebut sebagai load balancing, dengan begitu aplikasi server 
dapat diakses secara lebih cepat dibandingkan dijalankan menggunakan node process secara langsung.

//* how to install Process manager in EC2 instance
//?PM2 merupakan salah satu Node.js process manager yang populer digunakan. kita akan menggunakan PM2 ini
untuk memantau web server yang ada di EC2 instance.
//? npm install -g pm2 => melakukan penginstalan secara global
//? pm2 start npm --name "notes-api" -- run "start-prod" 

jetika terjadi crash atau apapun, ia akan secara otomatis menjalankan ulang proses.
dengan begitu, tidak perlu khawatir server mengalami downtime lagi.

restart manual
//? pm2 restart notes-api

//stop
//?pm2 stop notes-api

//menjalankan kembali
//?pm2 start notes-api
*/