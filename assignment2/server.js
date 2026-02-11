import express from 'express';
import cors from 'cors';
import os from 'os';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/os-info', (req, res) => {
    const info = {
        userInfo: os.userInfo(),
        architecture: os.arch(),
        hostname: os.hostname(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
    };
    res.json(info);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
