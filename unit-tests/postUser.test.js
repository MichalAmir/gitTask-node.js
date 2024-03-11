const mockingoose = require('mockingoose');
const usersModel = require('../models/users');
const { postUser } = require('../services/user.services');

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
 