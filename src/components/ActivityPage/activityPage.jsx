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



  const dispatch = useDispatch()
  const [p1wincount, setP1WinCount] = useState(0);
  const handleClick = (event) => {
    const userId = user.id;
    console.log("see if its zeor", newmatch.p1wincount);



    // Increment p1wincount by 1
    const updatedP1WinCount = newmatch.p1wincount++;



    setP1WinCount(updatedP1WinCount);




    dispatch({
      type: 'SET_MATCH_DETAILS',
      payload: {
        matchTitle: newmatch.matchTitle,
        playerOne: newmatch.playerOne,
        p1wincount: updatedP1WinCount,
        playerTwo: newmatch.playerTwo,
        userId,
        gamename: newmatch.gamename

      },
    });

  }

  //   dispatch({
  //     type: 'SET_MATCH_DETAILS',
  //     payload: {
  //       matchTitle: updatedMatch.matchTitle,
  //       playerOne: updatedMatch.playerOne,
  //       p1wincount: updatedP1WinCount, // Pass the updated value
  //       playerTwo: updatedMatch.playerTwo,
  //       userId,
  //       newGame: newGame.gamename
  //     }





  //   });
  // }




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
      <h4>EVENT:{newmatch.matchTitle}</h4>
      <h3>Game:{newmatch.gamename} </h3>
      <h2> hey</h2>
      <p>Player 1: {newmatch.playerOne} Wins: {p1wincount} <button onClick={handleClick}> W </button>

      </p>
      <p>Player 2: {newmatch.playerTwo} Wins: {PlayerTwoWinButton} <button onClick={handleClick2}> W </button></p>




    </div>
  );
}

export default ActivityPage;
