const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/users', userRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
