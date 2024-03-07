const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getById);
<<<<<<< HEAD
router.put('/', userController.putUser);
router.post('/:id', userController.postUser);
=======
router.put('/:id', userController.putUser);
router.post('/', userController.postUser);
>>>>>>> a5327127425c39c7ab42259cdf7fdde5c1bc14ff
router.delete('/:id', userController.deleteUser);

module.exports = router;
