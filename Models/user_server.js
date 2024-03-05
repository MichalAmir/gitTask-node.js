const users = [
    { id: "1", name: "Avigail", email: "Avigail@gmail.com", phone: "0548559877" },
    { id: "2", name: "shulamit", email: "shulamit@gmail.com", phone: "0587658877" },
    { id: "3", name: "Michal", email: "Michal@gmail.com", phone: "054987877" }
];
function getAllUsers(req, res) {
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
        users[index].phone = req.query.newPhone || 'null'
        res.send(users[index]).status(200)
    }
    catch
    {
        res.send("not found").status(404)
    }
}
function postUser(req, res) {
    try {
        let newUser = { id: "", name: "", email: "", phone: "" };

        // Check if all fields exist in the request body
        if (!req.body.id || !req.body.name || !req.body.email || !req.body.phone) {
            return res.send("Missing fields").status(400);
        }

        // Check if the email is in the correct format
        if (!isValidEmail(req.body.email)) {
            return res.send("Invalid email format").status(400);
        }

        newUser.id = req.body.id;
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.phone = req.body.phone;

        users.push(newUser);
        return res.send(newUser).status(200);
    } catch {
        return res.send("User not found").status(404);
    }
}

// Function to validate email format
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function deleteUser(req, res) {
    try {
        let index = users.findIndex(x => x.id == req.params.id)
        users.splice(index, 1)
        res.send(users).status(200)
    }
    catch {
        res.send("cant to delete").status(404)

    }
}
module.exports = { getAllUsers, getById, putUser, postUser, deleteUser }  

