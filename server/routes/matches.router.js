const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query = `
    SELECT matches.*, gametitle.gamename
    FROM matches
    JOIN gametitle ON matches.gameid = gametitle.id
    ORDER BY matches.winner, matches.loser, gametitle.gamename, matches.date ASC;
  `;
  pool.query(query)
    .then((result) => {
      // Send the result back as JSON
      res.json(result.rows);
    })
    .catch((error) => {
      console.error('Error executing SQL query', error);
      res.status(500).send('An error occurred while fetching data.');
    });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('In POST request');
  const [winner, loser, gametitle, p1wincount, p2wincount, matchtitle, userId] = req.body

  // console.log('New matchlog details:', logMatch);
  const queryText = `INSERT INTO "matches"("winner","loser","gameid","p1wincount","p2wincount","matchtitle", "date","userid") VALUES ($1,$2,(SELECT "id" FROM "gametitle" WHERE "gamename" =$3 LIMIT 1), $4, $5, $6, CURRENT_DATE,$7 )`;
  pool.query(queryText, [winner, loser, gametitle, p1wincount, p2wincount, matchtitle, userId])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing  add game to query', err);
      res.sendStatus(500);
    });
  // POST route code ends here
});

module.exports = router;
