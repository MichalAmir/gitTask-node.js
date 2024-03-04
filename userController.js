const express = require("express")
const app = express()
const port = 8080
 
const users=[{ id:"1",name:"NameForExample",email:"example@gmail.com",phone:"0548559877"}]

app.get( '/users',userController.getAllUsers)

app.get( '/users/:id',userController.getById)

app.put('/users',userController.put)

app.post('/users/:newName',userController.post)

app.delete('/users/:id',userController.Delete)

app.listen(port, () => {
    console.log("server is runing!!")
})