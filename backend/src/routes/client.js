const express = require('express');

const clientController = require('../controllers/client');

const router = express.Router();

router.get('/', clientController.getClients);

router.post('/', clientController.createClient);

module.exports = router;