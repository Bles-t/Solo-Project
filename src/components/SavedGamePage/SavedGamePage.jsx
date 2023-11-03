import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function SavedGamePage() {


  // const playerOne = useSelector((store) => store.PlayerOne);
  // const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer

  const user = useSelector((store) => store.user);

  const location = useLocation();

  const gameData = location.state ? location.state.gameData : null;
  const playerOne = gameData ? gameData.winner : "Player 1";
  const playerTwo = gameData ? gameData.loser : "Player 2";
  const p2wincount = gameData ? gameData.p2wincount : "Game date not found";
  const p1wincount = gameData ? gameData.p1wincount : "win count not entered";
  const gameTitle = gameData ? gameData.gameid : "Gamename not entered";


  console.log('Game data found:', gameData.winner);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    const userId = user.id
    dispatch({
      type: 'PLAYERONEWIN',

      payload: { playerOne, playerTwo,  userId }
    })
  }

  const handleClick2 = (event) => {
    const userId = user.id
    dispatch({
      type: 'WINBUTTON',

      payload: { playerOne, playerTwo,  userId }
    })
  }

  return (
    <div>
      {/* <h4>EVENT:{matchTitle}</h4> */}
      <h3>Game:{gameData.gameid} </h3>
      <h2> hey</h2>
      <p>Player 1: {gameData.winner} Wins: {gameData.p1wincount} <button onClick={handleClick}> W </button></p>
      <p>Player 2: {gameData.loser} Wins:  {gameData.p2wincount} <button onClick={handleClick2}> W </button></p>




    </div>
  );
}

export default SavedGamePage;
