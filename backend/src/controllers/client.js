const { validationResult } = require('express-validator/check');

const Client = require('../models/client');

exports.getClients = (req, res, next) => {
  Client.find()
    .then(clients => {
      res
        .status(200)
        .json({ message: 'Fetched clients successfully.', clients: clients });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createClient = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Validation failed', errors: errors.array() });
  }
  const name = req.body.name;
  const email = req.body.email;
  const createdDate = new Date();
  const company = req.body.company;

  const client = new Client({
    name: name,
    email: email,
    createdDate: createdDate,
    company: company,
  });

  client.save().then((client) => {
    res.status(201).json({
      message: 'Client created successfully!',
      client: client
    });
  }).catch(
    err => {
      console.log(err)
      res.status(500).json({
        message: 'Creating a client failed!'
      });
    });
};