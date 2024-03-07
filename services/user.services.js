const User = require("../models/users");

const getAllUsers = () => User.find();

const getById = (id) => User.findOne({ id });

const postUser = ({ id, name, email, phone }) => User.create({ id, name, email, phone });

const putUser = (id, name, email, phone) => User.findOneAndUpdate(
  { id },
  { name, email, phone },
  { new: true }
);

const deleteUser = (id) => User.findOneAndDelete({ id });

module.exports = { getAllUsers, getById, putUser, postUser, deleteUser };
// const User = require("../models/users");

// async function getAllUsers() {
//   const users = await User.find();
//   return users;
// }

// async function getById(id) {
//   const user = await User.findOne({ id });
//   return user;
// }

// async function postUser(id, name, email, phone) {
//   const user = await User.create({ id, name, email, phone });
//   return user;
// }


// async function putUser(id, name, email, phone) {
//   const updatedUser = await User.findOneAndUpdate(
//     { userId: id }, // update by userId field
//     { name, email, phone },
//     { new: true }
//   );
//   return updatedUser;
// }

// async function deleteUser(id) {
//   const deletedUser = await User.findOneAndDelete({ id });
//   return deletedUser;
// }

// module.exports = { getAllUsers, getById, putUser, postUser, deleteUser };