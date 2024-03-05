const express = require("express")
;const router = express.Router();
const userServer=require('../Models/user_server')
function getAllUsers(req, res) 
{
    userServer.getAllUsers(req, res)
}
function getById(req, res) 
{
    userServer.getById(req, res)
}
function putUser(req, res) 
{
    userServer.putUser(req, res)
}
function postUser(req, res) 
{
    userServer.postUser(req, res)
}
function deleteUser(req, res) 
{
    userServer.deleteUser(req, res)
}
module.exports = {getAllUsers,getById,putUser,postUser,deleteUser};

