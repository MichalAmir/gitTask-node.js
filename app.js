const express = require('express');
const app = express();
const userRouter = require('./routing');

app.use(userRouter);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});