const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');
fs.appendFileSync('test.txt', 'and I am happy.!');

fs.cpSync('test.txt', 'test1.txt');

fs.unlinkSync('test1.txt');
