const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();


//was Using this code to check if my server is connecting to my database


const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gametitleRouter = require('./routes/gametitle.router')
const matchesRouter = require('./routes/matches.router')
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
app.use('/gametitle', gametitleRouter);
app.use('/matches', matchesRouter);
// Serve static files
app.use(express.static('build'));





// App Set //
const PORT = process.env.PORT || 5005;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
