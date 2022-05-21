// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost': 'cpupush.com',
// });

//*get memory usage
const cpuInformation = process.memoryUsage();
console.log(cpuInformation);
