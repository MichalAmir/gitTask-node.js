const mockingoose = require('mockingoose');
const usersModel = require('../models/users');
const { putUser, getById } = require('../services/user.services');

describe('putUser', () => {
    it('should update an existing user', async () => {
      // Mock the initial user data
      mockingoose(usersModel).toReturn({
        id: '1234567',
        name: 'chani',
        email: 'chani@gmail.com',
        phone: '0555555555',
      }, 'findOne');
  
      // Mock the updated user data
      mockingoose(usersModel).toReturn({
        id: '1234567',
        name: 'chani Updated',
        email: 'chaniupdated@gmail.com',
        phone: '0555555555',
      }, 'findOneAndUpdate');
  
      const updatedUser = await putUser('1234567', 'chaniUpdated', 'chaniupdated@gmail.com', '0555555555');
  
      expect(updatedUser.name).toEqual('chaniupdated@gmail.com');
    });
  });
  