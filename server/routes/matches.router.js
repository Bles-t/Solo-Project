const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query = `SELECT * FROM matches ORDER BY "winner","loser","gameid" ASC`;
  pool.query(query)
    .then(result => {
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
router.post('/', (req, res) => {
  console.log('In POST request');
  const { winner, loser, gameTitle, userId } = req.body

  console.log('New matchlog details:', logMatch);
  const queryText = `INSERT INTO "matches"("winner","loser","gameid","date","userid") VALUES ($1,$2, CURRENT_DATE)`;
  pool.query(queryText, [logMatch])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing  add game to query', err);
      res.sendStatus(500);
    });
  // POST route code ends here
});

module.exports = router;
