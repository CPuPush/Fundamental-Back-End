//get memory usage object with heapUsed Key
const initialMemoryUsage = process.memoryUsage()["heapUsed"]; //TODO 1
//get argument from commandline => node processStart.js <name>
const yourName = process.argv[2]; //TODO 2
//Set manual env value in process.env 
const environment = process.env.NODE_ENV;//TODO 3

for(let i = 0; i<= 10000; i++){

}
//get memoryUsage with heapUsed key
const currentMemoryUsage = process.memoryUsage()["heapUsed"];

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memory dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

//example run : SET NODE_ENV=development && ./processStart.js <name or something>