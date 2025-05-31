const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');
const pool = require('./config/db');

app.use(express.json());
app.use('/users', userRouter);
app.use(errorHandler);

// Ensure database connection before starting server
pool.connect()
  .then(client => {
    client.release();
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server listening on port', process.env.PORT || 3000);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  });
