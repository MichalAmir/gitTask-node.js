const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getById);
router.put('/', userController.putUser);
router.post('/:id', userController.postUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
