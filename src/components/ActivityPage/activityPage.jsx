import React from "react";
import { useSelector } from "react-redux";

function ActivityPage() {
  const playerOne = useSelector((store) => store.playerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  const gameList = useSelector((store) => store.gameList);
  const matchTitle = useSelector((store) => store.matchTitle);

  
  return (
    <div>

      <h4>{matchTitle}</h4>
      <h3>{gameList}</h3>
      <h2> hey</h2>
      <p>Player 1: {playerOne}</p>
      <p>Player 2: </p>
      {playerTwo.map((player, index) => (
        <p key={index}> Player2: {player}</p>
      ))}
      {/* {matchTitle.map((match, index) => (
        <h4 key={index}> {match} </h4>
      ))} */}
    </div>
  );
}

export default ActivityPage;
