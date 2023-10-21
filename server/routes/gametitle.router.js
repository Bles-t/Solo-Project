const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
 // POST route code starts here
router.post('/', (req, res) => {
 console.log('In POST request');
const newGame = req.body;
const queryText = `INSERT INTO "gametitle"("id" ,"gamename") VALUES ($1,$2)`;
const queryValues = [
  newGame.id,
  newGame.gamename
];
pool.query(queryText, queryValues)
.then(() => { res.sendStatus(201); })
.catch((err) => {
  console.log('Error completing SELECT species query', err);
  res.sendStatus(500);
});
 // POST route code ends here
});

module.exports = router;
