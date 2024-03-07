const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getById);
router.put('/:id', userController.putUser);
router.post('/', userController.postUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
