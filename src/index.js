const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send({
        test: 'hello world'
    })
});

app.get('/version', function (req, res) {
    res.send({
        version: '1.0'
    })
});

module.exports.handler = serverless(app);