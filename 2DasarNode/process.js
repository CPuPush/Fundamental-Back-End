/*
Anda juga bisa secara manual menyimpan nilai di dalam process.env.
contoh jika ingin nilai variable host berbeda dikalangan pengembang(development) dan
production, kit abisa membuat properti NODE_ENV pada process.env. Jadi bisa menentukan
nilai host berdasarkan kondisi NODE_ENV.
*/
// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost': 'cpupush.com',
// });

// //*get memory usage
const cpuInformation = process.memoryUsage();
console.log(cpuInformation);
/*
{
rss: 14569472,
heapTotal: 2654208,
heapUsed: 1788896,
external: 855681,
arrayBuffers: 9898
}
*/

//process.argv
const firstName = process.argv[2];
const lastname = process.argv[3]

console.log(`my name is ${firstName} ${lastname}`);

//run with node process.js CPu Push
/**
element 1 => path lengkap dari lokasi node menjalankan process
element 2 => alamat path (file.js)
element 3 => CPu
element 4 => Push
 */