import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function SavedGamePage() {

  const PlayerOneWinButton = useSelector((store) => store.PlayerOneWins);
  const PlayerTwoWinButton = useSelector((store) => store.PlayerTwoWins);
  // const playerOne = useSelector((store) => store.PlayerOne);
  // const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  const gameList = useSelector((store) => store.GameList);
  const matchTitle = useSelector((store) => store.MatchTitle);
  const user = useSelector((store) => store.user);

  const location = useLocation();

  const gameData = location.state ? location.state.gameData : null;
  const playerOne = gameData ? gameData.winner : "Player 1";
  const playerTwo = gameData ? gameData.loser : "Player 2";
  // const gameDate = gameData ? gameData.date : "Game date not found";
  const gameTitle = location.state ? location.state.game : "Game not entered";
  console.log('Game data found:', gameData.winner);
  const dispatch = useDispatch()

  const handleClick = (event) => {

    // const winnerName = playerOne;
    // const loserName = playerTwo;
    // const gameTitle = gameTitle;
    const userId = user.id
    // console.log(feedbackData);
    // axios.post('/feedback', feedbackData)

    dispatch({
      type: 'PLAYERONEWIN',

      payload: { playerOne, playerTwo, gameTitle, userId }
    })
  }

  const handleClick2 = (event) => {

    // const winnerName = playerOne;
    // const loserName = playerTwo;
    // const gameTitle = gameTitle;
    const userId = user.id
    // console.log(feedbackData);
    // axios.post('/feedback', feedbackData)

    dispatch({
      type: 'WINBUTTON',

      payload: { playerOne, playerTwo, gameTitle, userId }
    })
  }

  return (
    <div>
      {/* <h4>EVENT:{matchTitle}</h4> */}
      <h3>Game:{gameTitle} </h3>
      <h2> hey</h2>
      <p>Player 1: {gameData.winner} Wins: {PlayerOneWinButton} <button onClick={handleClick}> W </button></p>
      <p>Player 2: {gameData.loser} Wins: {PlayerTwoWinButton} <button onClick={handleClick2}> W </button></p>




    </div>
  );
}

export default SavedGamePage;
