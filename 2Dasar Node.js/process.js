// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost': 'cpupush.com',
// });

// //*get memory usage
// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);

//process.argv
const firstName = process.argv[2];
const lastname = process.argv[3]

console.log(`my name is ${firstName} ${lastname}`);

//run with node process.js CPu Push
/**
 * element 1 => path lengkap dari lokasi node menjalankan process
 * element 2 => alamat path (file.js)
 * element 3 => CPu
 * element 4 => Push
 */