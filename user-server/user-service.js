// user-service.js

const express = require('express');
const app = express();
const PORT =  3002; 

app.get('/users', (req, res) => {
    res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
