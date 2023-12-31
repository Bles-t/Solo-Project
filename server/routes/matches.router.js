const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here

  const query = `SELECT "gameid" FROM "matches"`;


  console.log("this is query", query);
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all games', err);
      res.sendStatus(500)
    })
});



router.post('/', (req, res) => {
  console.log('In POST request');


  const { playerOne, playerTwo, gamename, p1wincount, p2wincount, matchTitle, userId } = req.body
  console.log("This is req.body", req.body);
  // console.log('New matchlog details:', logMatch);
  const queryText = `INSERT INTO "matches"("winner","loser","gameid","p1wincount","p2wincount","matchtitle", "date","userid") VALUES ($1,$2,$3, $4, $5, $6, CURRENT_DATE,$7 ) RETURNING id`;
  pool.query(queryText, [playerOne, playerTwo, gamename, p1wincount, p2wincount, matchTitle, userId])

    .then((result) => {
      console.log("Adrian");
      const newMatchId = result.rows[0].id;
      res.status(201).json({ message: 'New match ID', newMatchId });
      // send id to cleint


    })

    .catch((err) => {
      console.log('Error completing  add game to query', err);

      res.sendStatus(500);
    });
  // POST route code ends here
});




//DELETE - game
router.delete('/:id', (req, res) => {
  game = req.params.id
  let queryText = 'DELETE FROM "matches" WHERE "gameid" = $1;';
  pool.query(queryText, [game])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Error making query ${queryText}`, err);
      res.sendStatus(500)
    })
}) //end DELETE



// // PUT route update route
// router.put('/:id', (req, res) => {
//   const matchId = req.params.id;

//   const query = `
//     UPDATE matches
//     SET p1wincount
//     WHERE id = $1
//     RETURNING p1wincount;
//   `;

//   pool.query(query, [matchId])
//     .then((result) => {
//       const p1wincount = result.rows[0].p1wincount;
//       res.status(200).json({ p1wincount: p1wincount });
//     })
//     .catch((error) => {
//       console.error('Error updating p1wincount:', error);
//       res.status(500).send('An error occurred while updating p1wincount.');
//     });
// });

router.put('/:id', (req, res) => {
  let matchId = req.params.id;


  // i added .p1wincount at the end and wont work and when removed it shows data on server but not taking an int
  let p1wincount = req.body.p1wincount; // Assuming that the new p1wincount value is sent in the request body

  let p2wincount = req.body.p2wincount

  // The SQL query string needs to SET p1wincount to a new value.
  // The $2 placeholder will be replaced with the new p1wincount value provided in the request body.

  console.log("win count and match id", p1wincount, matchId);

  const query = `
    UPDATE "matches"
    SET "p1wincount" = $2,
    "p2wincount" = $3
    WHERE "id" = $1
    RETURNING "p1wincount";
  `;
  console.log("this is query", query);


  pool.query(query, [matchId, p1wincount, p2wincount]) // matchId will replace $1, and p1wincount will replace $2
    .then((result) => {
      let p1wincountReturn = result.rows[0];
      let p2wincountReturn = result.rows[0];
      res.status(200).json({
        p1wincount:
          p1wincountReturn,
        p2wincount: p2wincountReturn
      });
      console.log(result.rows);

    })
    .catch((error) => {
      console.error('Error updating p1wincount:', error);
      res.status(500).send('An error occurred while updating p1wincount.');
    });
});





module.exports = router;
