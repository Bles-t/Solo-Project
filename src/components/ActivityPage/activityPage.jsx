import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function ActivityPage() {
  const PlayerOneWinButton = useSelector((store) => store.PlayerOneWins);
  const PlayerTwoWinButton = useSelector((store) => store.PlayerTwoWins);
  // const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root
  const user = useSelector((store) => store.user);
  const p1wincount = useSelector((store) => store.matchSetup.p1wincount);
  const location = useLocation();


  const newmatch = location.state ? location.state.newmatch : "new match data not entered";

  console.log("here i am", newmatch);


  const dispatch = useDispatch()
  // const [p1wincount, setP1WinCount] = useState(0);

  const [p2wincount, setp2wincount] = useState(0);
  console.log("see vaule", newmatch.p1wincount);
  // In your component.js


  const handleClick = (event) => {
    // Assuming newmatch contains the data necessary for the update
    // and matchId is a part of this object or can be obtained separately
    const matchId = newmatch.id; // or however you obtain the match ID
    const updatedP1WinCount = newmatch.p1wincount + 1; // For incrementing the win count

    dispatch({
      type: 'INCREMENT_P1_WIN_COUNT',
      // You may want to pass necessary data here as well if this dispatch updates state
      payload: { matchId, p1wincount: updatedP1WinCount }
    });

    dispatch({
      type: 'UPDATE_DATABASE',
      payload: { matchId, p1wincount: updatedP1WinCount }
    });
  };



  const handleClick2 = (event) => {
    const userId = user.id;
    console.log("see if its zeor", newmatch.p2wincount);



    // Increment p1wincount by 1
    const updatedP2WinCount = newmatch.p2wincount + 1;



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
