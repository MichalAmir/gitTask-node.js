const User = require("./users");

async function getAllUsers() {
  const users = await User.find();
  return users;
}

async function getById(id) {
  const user = await User.findOne({ id });
  return user;
}

async function postUser(id, name, email, phone) {
  const newUser = new User({ id, name, email, phone });
  await newUser.save();
  return newUser;
}

async function putUser(id, name, email, phone) {
  const updatedUser = await User.findOneAndUpdate(
    { id: id }, // update by user id field
    { $set: { name, email, phone } }, 
    { new: true }
  );
  return updatedUser;
}

async function deleteUser(id) {
  const deletedUser = await User.findOneAndDelete({ id });
  return deletedUser;
}

module.exports = { getAllUsers, getById, putUser, postUser, deleteUser };