const User = require("../Models/users");


async function getAllUsers   (req, res)  {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Failed to get users:', error);
      res.status(500).json({ message: 'Failed to get users' });
    }
  };

  async function getById  (req, res)  {
    const { id } = req.params;
    try {
      const user = await User.findOne({ id });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Failed to get user:', error);
      res.status(500).json({ message: 'Failed to get user' });
    }
  };
  async function postUser(req,res)
  {
    console.log(req.body);
    const {id} = req.body;
    const {name} = req.body;
    const {email} = req.body;
    const {phone} = req.body;

    const task = await User.create(req.body);
    res.json(task)
}
async function deleteUser  (req, res)  {
    const  userId  = req.params.userId;
  console.log(userId);
    try {
      const deletedUser = await User.findOneAndDelete({ userId: userId });
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  };

  async function putUser  (req, res) {
    const { userId } = req.params;
    const { name, email,phone } = req.body;
  
    try {
      const updatedUser = await User.findOneAndUpdate(
        { userId: userId }, // עדכון לפי שדה userId
        { name, email,phone },     
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  };
  
  module.exports = {getAllUsers,getById,putUser,postUser,deleteUser};
// // const users = [
// //     { id: "1", name: "Avigail", email: "Avigail@gmail.com", phone: "0548559877" },
// //     { id: "2", name: "shulamit", email: "shulamit@gmail.com", phone: "0587658877" },
// //     { id: "3", name: "Michal", email: "Michal@gmail.com", phone: "054987877" }
// // ];

// function getAllUsers(req, res) {
//     try {
//         res.send(users);
//     }
//     catch {
//         res.send("not found").status(404)
//     }
// }
// function getById(req, res) {
//     try {
//         let index = users.findIndex(x => x.id == req.params.id)
//         if (index == -1) {
//             res.send("not found").status(404)
//         }
//         else {
//             res.send(users[index]).status(200)
//         }
//     }
//     catch {
//         res.send("not found this user").status(404)

//     }
// }
// function putUser(req, res) {
//     try {
//         let index = users.findIndex(x => x.id == req.params.id)
//         users[index].name = req.query.newName || 'null'
//         users[index].phone = req.query.newPhone || 'null'
//         res.send(users[index]).status(200)
//     }
//     catch
//     {
//         res.send("not found").status(404)
//     }
// }
// function postUser(req, res) {
//     try {
//         let newUser = { id: "", name: "", email: "", phone: "" };

//         // Check if all fields exist in the request body
//         if (!req.body.id || !req.body.name || !req.body.email || !req.body.phone) {
//             return res.send("Missing fields").status(400);
//         }

//         // Check if the email is in the correct format
//         if (!isValidEmail(req.body.email)) {
//             return res.send("Invalid email format").status(400);
//         }

//         newUser.id = req.body.id;
//         newUser.name = req.body.name;
//         newUser.email = req.body.email;
//         newUser.phone = req.body.phone;

//         users.push(newUser);
//         return res.send(newUser).status(200);
//     } catch {
//         return res.send("User not found").status(404);
//     }
// }

// // Function to validate email format
// function isValidEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
// }

// function deleteUser(req, res) {
//     try {
//         let index = users.findIndex(x => x.id == req.params.id)
//         users.splice(index, 1)
//         res.send(users).status(200)
//     }
//     catch {
//         res.send("cant to delete").status(404)

//     }
// }
// module.exports = { getAllUsers, getById, putUser, postUser, deleteUsecon

