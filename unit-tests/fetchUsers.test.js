const mockingoose = require('mockingoose');
const usersModel = require('../models/users');
const { getAllUsers } = require('../services/user.services');

describe('fetchUsers', () => {
  it('should return the list of users', async () => {
    mockingoose(usersModel).toReturn([
        {
          id: '123456789',
          name: "michal",
          email: "chaniupdated@gmail.com",
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
      expect(results[0].email).toEqual('chaniupdated@gmail.com');
  });
});
