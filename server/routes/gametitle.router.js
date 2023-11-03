const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query = `SELECT * FROM gametitle ORDER BY "gamename" ASC`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all games', err);
        res.sendStatus(500)
      })
});

/**
 * POST route template
 */
// POST route code starts here
router.post('/', (req, res) => {
  console.log('In POST request');
  const newGame = req.body;
  console.log('New game title:', newGame);
  const queryText = `INSERT INTO "gametitle"("gamename") VALUES ($1)`;
  pool.query(queryText, [newGame])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing  add game to query', err);
      res.sendStatus(500);
    });
  // POST route code ends here
});

module.exports = router;
