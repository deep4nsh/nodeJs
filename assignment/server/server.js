const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, 'message.txt');

// Write endpoint
app.post('/write', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).send('Message is required');
    }

    fs.writeFile(filePath, message, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error writing file');
        }
        res.send('File written successfully');
    });
});

// Read endpoint
app.get('/read', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.send(''); // Return empty string if file doesn't exist
            }
            console.error(err);
            return res.status(500).send('Error reading file');
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
