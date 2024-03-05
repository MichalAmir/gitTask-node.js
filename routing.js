const express = require("express");
const router = express.Router();
const userController = require('./Controllers/usercontroller');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getById);
router.put('/users', userController.putUser);
router.post('/users/:newName', userController.postUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;