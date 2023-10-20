import React from "react";
import { useSelector, useDispatch } from "react-redux";
function ActivityPage() {
  const winButton = useSelector((store) => store.Winners);
  const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  const gameList = useSelector((store) => store.GameList);
  const matchTitle = useSelector((store) => store.MatchTitle);

  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch()


  return (
    <div>
      <h4>EVENT:{matchTitle}</h4>
      <h3>Game Name:{gameList}</h3>
      <h2> hey</h2>
      <p>Player 1: {playerOne} Wins: {winButton} <button onClick={() => dispatch({ type: 'WINBUTTON' })}> W </button></p>
      <p>Player 2: {playerTwo} Wins: {winButton} <button onClick={() => dispatch({ type: 'WINBUTTON' })}> W </button></p>




    </div>
  );
}

export default ActivityPage;
