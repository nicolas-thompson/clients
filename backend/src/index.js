const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const clientRoutes = require('./routes/client.js');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/client', clientRoutes);

mongoose.connect('mongodb+srv://nicolas:odoj8pog@cluster0.lyjgw.mongodb.net/clients?retryWrites=true&w=majority').then(result => {
  app.listen(3001);
}).catch(err => { console.log(err) });