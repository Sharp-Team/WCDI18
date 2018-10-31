const express = require('express-promise-router')
const userRouter = express()
const bodyParser = require('body-parser')
const { userController } = require('../controllers/index')

userRouter.use(bodyParser.urlencoded({ extended: false }));
userRouter.use(bodyParser.json());

userRouter.post('/', userController.create);
userRouter.get('/', userController.get);
userRouter.get('/:id', userController.getOne);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.destroy);

module.exports = userRouter
