
const testServices = require("../services/user.services");
let users =[{id:"123456",name:"avigail",email:"avi@gmail.com",phone:"055879654"}]

test('Posts a new user', async () => {
  // Define the data for the new user
  const newUser = {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890"
  };

  // Call the postUser function from the user.services module
  const createdUser = await testServices.postUser(newUser.id, newUser.name, newUser.email, newUser.phone);

  // Verify the response
  expect(createdUser).toBeDefined(); // Ensure that the created user object exists
  expect(createdUser.id).toBe(newUser.id);
  expect(createdUser.name).toBe(newUser.name);
  expect(createdUser.email).toBe(newUser.email);
  expect(createdUser.phone).toBe(newUser.phone);

  // Optionally, you can check the database or perform additional assertions based on your application's logic
});


test('Returns a user by id', async () => {
    const expectedUser = {
        id:"123456",name:"avigail",email:"avi@gmail.com",phone:"055879654"
    };
  
    const actualUser = await testServices.getById("123456");
  
    expect(JSON.stringify(actualUser)).toEqual(JSON.stringify(expectedUser));
  }, 100000); // 10 seconds timeout
  

// test('Returns a user by id', async () => {
//   // Define the expected user object
//   const expectedUser = {
//     id: "1",
//     name: "shulamit",
//     email: "shula@gmail.com",
//     phone: "0556786670"
//   };

//   // Call the getById function from the user.services module
//   const actualUser = await testServices.getById("1");

//   // Compare the actual user with the expected user using Jest's expect function
//   expect(actualUser).toEqual(expectedUser);
// }, 10000); // Increase the timeout to 10 seconds