const express = require('express');
const bodyParser = require('body-parser');
const { authController } =require('../controllers/index');

const auth = express.Router()

auth.use(bodyParser.urlencoded({ extended: false }));
auth.use(bodyParser.json());

auth.post('/login', authController.login)
auth.post('/changePassword', authController.changePassword)

module.exports = auth
