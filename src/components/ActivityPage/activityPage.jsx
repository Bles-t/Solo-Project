import React from "react";
import { useSelector } from "react-redux";



function ActivityPage() {

  const playerOne = useSelector((store) => store.playerOne);
  const playerTwo = useSelector((store) => store.playerTwo);
  const gameList = useSelector((store) => store.gameList);
  const matchTitle = useSelector((store) => store.matchTitle);


  return (
    <div>
      <h4>{matchTitle}</h4>
      <h3>{gameList}</h3>

      <h2> hey</h2>
      <p>  Player 1:{playerOne} </p>
      <p>  Player 2:{playerTwo} </p>
    </div>
  )




}

export default ActivityPage;
