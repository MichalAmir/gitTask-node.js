const mockingoose = require('mockingoose');
const usersModel = require('../models/users');
const { getById } = require('../services/user.services');

describe('fetchUser', () => {
    it('should return a user', async () => {
        mockingoose(usersModel).toReturn({
          id: '123456789',
          name: 'michal',
          email: 'chaniupdated@gmail.com',
          phone: '0547558677',
        }, 'findOne');
  
        const result = await getById(2);
        // בדיקה שהתוצאה אינה undefined
        expect(result).toBeDefined();
        expect(result.name).toEqual('michal');
      });
});
