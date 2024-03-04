const express = require('express');
const app = express();
const userRouter = require('./routing');
const bodyParser =require('body-parser')

app.use(userRouter);
app.use(bodyParser.json())

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});