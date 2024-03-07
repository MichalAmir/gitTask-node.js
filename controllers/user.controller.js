const express = require("express")
const router = express.Router();
const userServer = require('../models/user.services')
const User = require("../models/users");

async function getAllUsers(req, res) {
  try {
    const users = await userServer.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ message: 'Failed to get users' });
  }
}

async function getById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ id });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      const users = await userServer.getById(id);
      res.json(users);
    }
  } catch (error) {
    console.error('Failed to get user:', error);
    return res.status(500).json({ message: 'Failed to get user' });
  }
}

async function postUser(req, res) {
  try {
    const { id, name, email, phone } = req.body;
    const newusers = await userServer.postUser(id, name, email, phone);
    res.json(newusers);
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
}


async function putUser(req, res) {
  try {
    const { userId } = req.params;
    const { name, email, phone } = req.body;
    const updatedUser = await userServer.putUser(userId, name, email, phone);
    res.json(updatedUser);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
}

async function deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userServer.deleteUser(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  }
  
module.exports = { getAllUsers, getById, putUser, postUser, deleteUser };
