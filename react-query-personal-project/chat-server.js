// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const { user, text } = req.body;
    const newMessage = { id: Date.now(), user, text, timestamp: new Date() };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));