

function gatAllUsers(req, res) {
    try {
        res.send(users);
    }
    catch {
        res.send("not found").status(404)
    }
}

function getById(req, res) {
    try {
        let index = users.findIndex(x => x.id == req.params.id)
        if (index == -1) {
            res.send("not found").status(404)
        }
        else {
            res.send(users[index]).status(200)
        }
    }
    catch {
        res.send("not found this user").status(404)

    }
}
function putUser(req, res) {
    try {
        let index = users.findIndex(x => x.id == req.params.id)
        users[index].name = req.query.newName || 'null'
        res.send(users[index]).status(200)
    }
    catch
    {
        res.send("not found").status(404)
    }
}
function postUser(req,res){
    try{
        let newUser ={id:"", name:""}
        newUser.id=req.body.id
        newUser.name=req.body.name
        users.push(newUser)
        res.send(newUser).status(200)

    }
    catch{
             res.send("not found this user").status(404)
    }
function deleteUser(req, res) {
    try {
        let index = users.findIndex(x => x.id = req.params.id)
        users.splice(index, 1)
        res.send(users).status(200)
    }
    catch {
        res.send("cant to delete").status(404)

    }
}
module.exports = { gatAllUsers, getById, putUser, postUser, deleteUser }  
}
