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
     it ('should return the list of users', async () => {
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
});
 