const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');
fs.appendFileSync('test.txt', 'and I am happy.!');

fs.cpSync('test.txt', 'test2.txt');
