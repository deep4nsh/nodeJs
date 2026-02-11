// const fs = require('fs').promises; 
// async function readJsonFile(filePath) {
//     try {
//         const data = await fs.readFile('myfile.txt', 'utf8');
//         const jsonObject = JSON.parse(data);
//         console.log('Read data:', jsonObject);
//         return jsonObject;
//     } catch (error) {
//         console.error('Error reading or parsing file:', error);
//         throw error;
//     }
// }

// readJsonFile('myfile.txt');


const os = require('os');
console.log('platform', os.platform());
console.log('architecture', os.arch());
console.log('total memory', os.totalmem());
console.log('free memory', os.freemem());
console.log('uptime', os.uptime());
console.log('homedir', os.homedir());
console.log('hostname', os.hostname());
console.log('network interfaces', os.networkInterfaces());
//userinfo
console.log('userinfo', os.userInfo());