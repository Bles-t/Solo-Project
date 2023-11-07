import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './activityPage.css'
import PSColorfulText from "../PSColorfulText";
import ColorfulText from "../../ColorfulText";
function ActivityPage() {
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

    <div className="containerActvitypage">
      <div>
        <h4 className="Header matchtitle" >
        <PSColorfulText text={`${newmatch.matchTitle}`} />
          </h4>





        <h3 className="Header gamename"  >{newmatch.gamename} </h3>



        <p className="Name p1" >  <PSColorfulText text={`Player 1: ${newmatch.playerOne}`} />

<br />
<PSColorfulText text={`Wins: ${p1newwincount}`} />
      <button className="Wbtn p1" onClick={handleClick}>

      <PSColorfulText text={'W'} /></button>

        </p>


        <p  className="Name p2"  >

    <PSColorfulText  text={`Player:2 ${newmatch.playerTwo}`}  />
      <br />
      <PSColorfulText text={`Wins: ${p2newwincount}`} />

         <button className="Wbtn p2" onClick={handleClick2} >  <PSColorfulText text={'  W'} /></button></p>




      </div>
    </div>
  );
}

export default ActivityPage;
