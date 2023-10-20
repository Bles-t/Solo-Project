import React from "react";
import { useSelector } from "react-redux";

function ActivityPage() {
  const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  const gameList = useSelector((store) => store.GameList);
  const matchTitle = useSelector((store) => store.MatchTitle);


  return (
    <div>
      <h4>EVENT:{matchTitle}</h4>
      <h3>Game Name:{gameList}</h3>
      <h2> hey</h2>
      <p>Player 1: {playerOne}   <button> W </button></p>
      <p>Player 2: {playerTwo}   <button> W </button></p>




    </div>
  );
}

export default ActivityPage;
