const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint - responds to "Bạn còn đó chứ?" (Are you still there?)
app.get('/api/ping', (req, res) => {
    res.json({
        message: 'Có, tôi vẫn ở đây!', // Yes, I'm still here!
        timestamp: new Date().toISOString(),
        status: 'online'
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'EcoPlastic ERP System Backend',
        status: 'running'
    });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên port ${PORT}`);
    console.log(`Truy cập: http://localhost:${PORT}/api/ping`);
});

module.exports = app;