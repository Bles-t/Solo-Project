import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function ActivityPage() {
  const PlayerOneWinButton = useSelector((store) => store.PlayerOneWins);
  const PlayerTwoWinButton = useSelector((store) => store.PlayerTwoWins);
  const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  const gameList = useSelector((store) => store.GameList);
  const matchTitle = useSelector((store) => store.MatchTitle);
  const user = useSelector((store) => store.user);

  const location = useLocation();

  const gameTitle = location.state ? location.state.game : "Game not entered";
  const dispatch = useDispatch()

  const handleClick = (event) => {
    const userId = user.id
    dispatch({
      type: 'PLAYERONEWIN',

      payload: { playerOne, playerTwo, gameTitle, userId }
    })
  }

  const handleClick2 = (event) => {
    const userId = user.id
    dispatch({
      type: 'WINBUTTON',

      payload: { playerOne, playerTwo, gameTitle, userId }
    })
  }




  console.log('Playertwo:', playerTwo);
  return (
    <div>
      <h4>EVENT:{matchTitle}</h4>
      <h3>Game:{gameTitle} </h3>
      <h2> hey</h2>
      <p>Player 1: {playerOne} Wins: {PlayerOneWinButton} <button onClick={handleClick}> W </button></p>
      <p>Player 2: {playerTwo} Wins: {PlayerTwoWinButton} <button onClick={handleClick2}> W </button></p>




    </div>
  );
}

export default ActivityPage;
