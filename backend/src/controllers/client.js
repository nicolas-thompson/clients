const { validationResult } = require('express-validator/check');

const Client = require('../models/client');

exports.getClients = (req, res, next) => {
  res.status(200).json({
    clients: [{ _id: 1, name: 'Nicolas Thompson', email: 'mail@nicolasthompson.com', createdDate: new Date(), company: 'Thompson Software Ltd' }]
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