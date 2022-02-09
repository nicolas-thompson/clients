const express = require('express');
const { body } = require('express-validator/check');

const clientController = require('../controllers/client');

const router = express.Router();

router.get('/', clientController.getClients);

router.post('/', [
  body('name').trim().isLength({ min: 1 }),
  body('email').trim().isEmail(),
  body('company').trim().isLength({ min: 1 }),
], clientController.createClient);

module.exports = router;