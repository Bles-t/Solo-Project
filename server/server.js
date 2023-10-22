const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: 'your-database-connection-string',
// });

// pool.connect()
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gametitleRouter = require('./routes/gametitle.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/gametitle', gametitleRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 3000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
