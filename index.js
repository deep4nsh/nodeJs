const fs = require('fs').promises; // or import fs from 'fs/promises';
async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile('myfile.txt', 'utf8');
        const jsonObject = JSON.parse(data);
        console.log('Read data:', jsonObject);
        return jsonObject;
    } catch (error) {
        console.error('Error reading or parsing file:', error);
        throw error;
    }
}