// product-service.js

const express = require('express');
const app = express();
const PORT =  3001; 

app.get('/products', (req, res) => {
    res.json({ products: ['Apple', 'Banana', 'Orange'] });
});
app.get('/sayHi', (req, res) => {
    res.send('Hi !');
})

app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});
