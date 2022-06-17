//?get memory usage in heapUsed Key
const initialMemoryUsage = process.memoryUsage().heapUsed;
//?get argv from commandLine CMD node <file.js> <argv>
const yourName = process.argv[2];
//?set manual NODE_ENV 
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
//run => SET NODE_ENV=development && node ./processStart.js <Nama Anda> 