import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function ActivityPage() {
  const PlayerOneWinButton = useSelector((store) => store.PlayerOneWins);
  const PlayerTwoWinButton = useSelector((store) => store.PlayerTwoWins);
  // const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root reducer
  // const gameList = useSelector((store) => store.GameList);
  // const matchTitle = useSelector((store) => store.MatchTitle);
  const user = useSelector((store) => store.user);

  const location = useLocation();


  const newmatch = location.state ? location.state.newmatch : "new match data not entered";

  console.log("here i am", newmatch);


  const dispatch = useDispatch()
  const [p1wincount, setP1WinCount] = useState(0);

  const [p2wincount, setp2wincount] = useState(0);

  const handleClick = (event) => {
    const userId = user.id;
    console.log("see if its zeor", newmatch.p1wincount);



    // Increment p1wincount by 1
    const updatedP1WinCount = newmatch.p1wincount + 1;



    setP1WinCount(p1wincount + 1);




    dispatch({
      type: 'SET_MATCH_DETAILS',
      payload: {
        matchTitle: newmatch.matchTitle,
        playerOne: newmatch.playerOne,
        p1wincount: p1wincount,
        playerTwo: newmatch.playerTwo,
        userId,
        gamename: newmatch.gamename
// grab match id from store
      },
    });

  }

  const handleClick2 = (event) => {
    const userId = user.id;
    console.log("see if its zeor", newmatch.p2wincount);



    // Increment p1wincount by 1
    const updatedP2WinCount = newmatch.p2wincount++;



    setp2wincount(updatedP2WinCount);




    dispatch({
      type: 'WINBUTTON',
      payload: {
        matchTitle: newmatch.matchTitle,
        playerOne: newmatch.playerTwo,
        p2wincount: updatedP2WinCount,
        playerTwo: newmatch.playerOne,
        userId,
        gamename: newmatch.gamename

      },
    });

  }
  console.log('Playertwo:', playerTwo);
  return (
    <div>
      <h4>EVENT:{newmatch.matchTitle}</h4>
      <h3>Game:{newmatch.gamename} </h3>
      <h2> hey</h2>
      <p>Player 1: {newmatch.playerOne} Wins: {p1wincount} <button onClick={handleClick}> W </button>

      </p>
      <p>Player 2: {newmatch.playerTwo} Wins: {p2wincount} <button onClick={handleClick2}> W </button></p>




    </div>
  );
}

export default ActivityPage;
