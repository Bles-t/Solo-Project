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
  // const gameData = location.state ? location.state.gameData : null;
  // const gameTitle = gameData ? gameData.gameTitle : "Game not entered";
// const playerOne = gameData ? gameData.playerOne : "Player 1";
// const playerTwo = gameData ? gameData.playerTwo : "Player 2";
  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch()

  // console.log('Game data found:', gameData);


  // trying to dishpatch this saga to fetch game List. dont think this is working yet becuase my database issue
  // useEffect(() => {
  //   console.log('in useEffect');
  //   const action = { type: 'GET_GAME' };
  //   dispatch(action);
  // }, []);


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
