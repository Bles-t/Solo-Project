import React from "react";
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

  const location = useLocation();

  const gameTitle = location.state ? location.state.game : "Game not entered";

  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch()

  console.log('gameTitlt:', gameTitle);

  // trying to dishpatch this saga to fetch game List. dont think this is working yet becuase my database issue
  // useEffect(() => {
  //   console.log('in useEffect');
  //   const action = { type: 'GET_GAME' };
  //   dispatch(action);
  // }, []);




  return (
    <div>
      <h4>EVENT:{matchTitle}</h4>
      <h3>Game Titles:   {gameTitle} </h3>

      {/* Using this for now to render the object data on the screen */}
      {JSON.stringify(gameList)}


      {

        //Tried to render it this was but .gamename is an object that isnt defined (dont know how to fix this)
        <ul>
          {gameList.map((game, index) => (
            <li key={index}>{game.gamename}</li>
          ))}
        </ul>}
      <h2> hey</h2>
      <p>Player 1: {playerOne} Wins: {PlayerOneWinButton} <button onClick={() => dispatch({ type: 'PLAYERONEWIN' })}> W </button></p>
      <p>Player 2: {playerTwo} Wins: {PlayerTwoWinButton} <button onClick={() => dispatch({ type: 'WINBUTTON' })}> W </button></p>




    </div>
  );
}

export default ActivityPage;
