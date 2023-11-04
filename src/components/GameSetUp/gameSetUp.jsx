import React from "react"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function GameSetUp() {

  const dispatch = useDispatch()


  const {newMatch, setNewMatch} = useState({
    playerOne: '',
    playerTwo: '',
    // Maybe add game probarites as a row just to make everything smother but for now imma do it this way.
    // game: '',
    gamename: '',
    matchTitle: '',
    p1wincount: 0, // Initialize with 0
    p2wincount: 0,
    userId: 'userId',
    matchId: 0
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("new match data", newMatch);
    dispatch({
      type: 'SET_MATCH_DETAILS',
      payload: newMatch,
    });

    // dispatch({
    //   type: 'LIST_DATA',
    //   payload: newMatch,
    // });



    setNewMatch({
      playerOne: '',
      playerTwo: '',
      matchTitle: '',
      gamename: '',
      p1wincount: 0,
      p2wincount: 0,
      userId: 0,
      matchId: 0
    });
    history.push('/ActivityPage', { newmatch: newMatch });
  };

  //



  const history = useHistory()

  return (

    <form onSubmit={handleSubmit}   >
      <h2>Enter Match Details</h2>

      <input name="name" placeholder="Player 1" type="text" value={newMatch.playerOne} onChange={(event) => setNewMatch({ ...newMatch, playerOne: event.target.value })} />

      <input name="name" placeholder="Player 2" type="text" value={newMatch.playerTwo} onChange={(event) => setNewMatch({ ...newMatch, playerTwo: event.target.value })} />

      {/* may add this back if im having issue swith gmaelist.map later on */}
      <input name="name" placeholder="Game Title" type="text" value={newMatch.gamename} onChange={(event) => setNewMatch({ ...newMatch, gamename: event.target.value })} />
      {/*
      <input name="name" placeholder="Game Title" type="text" value={newGame} onChange={event => setNewGame(event.target.value)} /> */}

      <input name="name" placeholder="Match Title" type="text" value={newMatch.matchTitle} onChange={(event) => setNewMatch({ ...newMatch, matchTitle: event.target.value })} />

      <button type='submit'>Submit</button>

    </form>

  )
}




export default GameSetUp;
