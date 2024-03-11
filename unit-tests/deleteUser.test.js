const mockingoose = require('mockingoose');
const usersModel = require('../models/users');
const { deleteUser } = require('../services/user.services');

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
