// user-service.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT =  3000; 

//http://127.0.0.1:3000/products-service/products=>http://127.0.0.1:3001/products
app.use('/products-service', createProxyMiddleware({ 
    target: 'http://127.0.0.1:3001', 
    pathRewrite: {'^/products-service' : ''}
}));
//http://127.0.0.1:3000/users-service/users=>http://127.0.0.1:3002/users
app.use('/users-service', createProxyMiddleware({ 
    target: 'http://127.0.0.1:3002', 
    pathRewrite: {'^/users-service' : ''}
}));

app.listen(PORT, () => {
    console.log(`API Gateway service running on port ${PORT}`);
});
