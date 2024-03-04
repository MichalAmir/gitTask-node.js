const express= require("express")

const router =express.Router()

const userController=require('./usercontroller')

router.get('/users', userController.gatAllUsers)
router.get('/users/:id', userController.getById)
router.put('/users/:id', userController.putUser)
router.post('/users', userController.postUser)
router.delete('/users/:id', userController.deleteUser)


module.exports=router
