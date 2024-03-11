const mockingoose = require('mockingoose');// יבוא של הספרייה mockingoose
const usersModel = require('../models/users');

const {
  getAllUsers,
  getById,
  putUser,
  postUser,
  deleteUser
} = require('../services/user.services');

describe('users service', () => {
  describe('fetchUsers', () => {
    it('should return the list of users', async () => {
      mockingoose(usersModel).toReturn([
        {
          id: '123456789',
          name: "michal",
          email: "chana@gmail.com",
          phone: "0547558677",
        },
        {
          id: '987654321',
          name: "yael",
          email: "yael@gmail.com",
          phone: "0547558677",
        },
      ], 'find');
      const results = await getAllUsers();
      expect(results[0].email).toEqual('chana@gmail.com');
    });
  });

  describe('fetchUser', () => {
    it('should return a user', async () => {
      mockingoose(usersModel).toReturn({
        id: '123456789',
        name: 'michal',
        email: 'chana@gmail.com',
        phone: '0547558677',
      }, 'findOne');

      const result = await getById(2);
      // בדיקה שהתוצאה אינה undefined
      expect(result).toBeDefined();
      expect(result.name).toEqual('michal');
    });
  });

  
  describe('postUser', () => {
    it('should add a new user', async () => {
      const newUser = {
        id: '111111111',
        name: 'Sarah',
        email: 'sarah@example.com',
        phone: '0555555555',
      };
      mockingoose(usersModel).toReturn(newUser, 'save');

      const addedUser = await postUser(newUser);
      expect(addedUser.name).toEqual('Sarah');
    });
  });
  describe('fetchUser', () => {
    it('should update user', async () => {
      const updatedUser = {
        _id: mongoose.Types.ObjectId(), // Use mongoose.Types.ObjectId() to create a new ObjectId
        name: 'updatedName',
        email: 'updatedEmail@gmail.com',
        phone: '0556789988',
      };
  
      mockingoose(usersModel).toReturn(updatedUser, 'findOneAndUpdate');
  
      // Call the putUser function with the necessary parameters
      const result = await putUser(updatedUser._id, 'updatedName', 'updatedEmail@gmail.com', '0556789988');
  
      console.log('Updated User:', result);
  
      expect(result.name).not.toBe(updatedUser.name);
      expect(result.email).not.toBe(updatedUser.email);
      expect(result.phone).not.toBe(updatedUser.phone);
    });
  });
  

  describe('fetchUser', () => {
    it('should delete user', async () => {
      const originalUser = {
        id: '214847875',
        name: 'chani',
        email: 'chani@gmail.com',
        phone: '0556789987',
      };

      mockingoose(usersModel).toReturn(originalUser, 'findOneAndDelete');

      // Call the deleteUser function with the necessary parameters
      const result = await deleteUser('214847875');

      // Expect that the result is truthy, indicating successful deletion
      expect(result).toBeTruthy();

    });
  });

});
