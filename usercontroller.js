const express = require("express")
const app = express()
const port = 8080
const userController= require('.user_server')
 
const users=[{ id:"1",name:"Avigail",email:"Avigail@gmail.com",phone:"0548559877"},
{ id:"2",name:"shulamit",email:"shulamit@gmail.com",phone:"0587658877"},
{ id:"3",name:"Michal",email:"Michal@gmail.com",phone:"054987877"},]

app.get('/users',userController.getAllUsers)

app.get('/users/:id',userController.getById)

app.put('/users',userController.put)

app.post('/users/:newName',userController.post)

app.delete('/users/:id',userController.Delete)

app.listen(port, () => {
    console.log("server is runing!!")
})