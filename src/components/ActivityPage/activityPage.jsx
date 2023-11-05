import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function ActivityPage() {

  const playerTwo = useSelector((store) => store.PlayerTwo); // Make sure the name matches the reducer name in your root
  const user = useSelector((store) => store.user);

  const matchId = useSelector((store) => store.storeNewMatchId);

  const location = useLocation();


  const newmatch = location.state ? location.state.newmatch : "new match data not entered";

  console.log("here i am", newmatch);


  const dispatch = useDispatch()

  const [p2newwincount, setp2newwincount] = useState(0);
  const [p1newwincount, setp1newwincount] = useState(0);
  console.log("see vaule", newmatch.p1wincount);

  const handleClick = (event) => {
    // Assuming newmatch contains the data necessary for the update
    // and matchId is a part of this object or can be obtained separately

    const updatedP1WinCount = newmatch.p1wincount += 1; // For incrementing the win count
    console.log("updatep1wincount", updatedP1WinCount);
    setp1newwincount(updatedP1WinCount)


    console.log("match id", matchId);
    dispatch({
      type: 'UPDATE_DATABASE', // The type here must match what the saga is listening for
      payload: {
        matchId: matchId.newMatchId,
        p1wincount: updatedP1WinCount
      }
    });

  };

  const handleClick2 = (event) => {
    // Assuming newmatch contains the data necessary for the update
    // and matchId is a part of this object or can be obtained separately

    const updatedP2WinCount = newmatch.p2wincount += 1; // For incrementing the win count
    console.log("updatep2wincount", updatedP2WinCount);
    setp2newwincount(updatedP2WinCount)


    console.log("match id", matchId);
    dispatch({
      type: 'UPDATE_DATABASE', // The type here must match what the saga is listening for
      payload: {
        matchId: matchId.newMatchId,
        p2wincount: updatedP2WinCount
      }
    });

  };




  useEffect(() => {
    setp1newwincount(p1newwincount)
  }, [dispatch]);


  return (
    <div>
      <h4>EVENT:{newmatch.matchTitle}</h4>
      <h3>Game:{newmatch.gamename} </h3>
      <h2> hey  {newmatch.p1wincount}</h2>
      <p>Player 1: {newmatch.playerOne} Wins: {p1newwincount} <button onClick={handleClick}> W </button>

      </p>
      <p>Player 2: {newmatch.playerTwo} Wins: {p2newwincount} <button onClick={handleClick2} > W </button></p>




    </div>
  );
}

export default ActivityPage;
