import React from "react";
import { useSelector, useDispatch } from "react-redux";
function ActivityPage() {
  const PlayerOneWinButton = useSelector((store) => store.PlayerOneWins);
  const PlayerTwoWinButton = useSelector((store) => store.PlayerTwoWins);
  const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  const gameList = useSelector((store) => store.GameList);
  const matchTitle = useSelector((store) => store.MatchTitle);

  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch()
  console.log('gameList:', gameList);


  return (
    <div>
      <h4>EVENT:{matchTitle}</h4>
      <h3>Game Titles:</h3>
      {JSON.stringify(gameList)}
      {/* <ul>
        {gameList.map((game, index) => (
          <li key={index}>{game.gamename}</li>
        ))}
      </ul> */}
      <h2> hey</h2>
      <p>Player 1: {playerOne} Wins: {PlayerOneWinButton} <button onClick={() => dispatch({ type: 'PLAYERONEWIN' })}> W </button></p>
      <p>Player 2: {playerTwo} Wins: {PlayerTwoWinButton} <button onClick={() => dispatch({ type: 'WINBUTTON' })}> W </button></p>




    </div>
  );
}

export default ActivityPage;
