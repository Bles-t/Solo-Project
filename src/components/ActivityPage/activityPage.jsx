import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import './activityPage.css'
import vsModeImage from './VS Mode.png';
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
    console.log("updatep1wincount  hello", updatedP1WinCount);
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
    console.log("updatep2wincount   whats here ", updatedP2WinCount);
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


  useEffect(() => {
    setp2newwincount(p2newwincount)
  }, [dispatch]);

  return (

    <div className="containerActvitypage">
      <div>


        <h3 className="Header gamename"  >
          <ColorfulText text={`Game:${newmatch.gamename}`} /> </h3>

        <h4 className="Header matchtitle" >
          <ColorfulText text={`${newmatch.matchTitle}`} />
        </h4>

        <p className="Name p1" >  <ColorfulText text={`Player 1: ${newmatch.playerOne}`} />

          <br />
          <ColorfulText text={`Wins: ${p1newwincount}`} />

          <button className="btn btn-dark Wbtn" onClick={handleClick}>

            <ColorfulText text={'W'} /></button>

        </p>

        <p className="Name p2"  >

          <ColorfulText text={`Player:2 ${newmatch.playerTwo}`} />
          <br />
          <ColorfulText text={`Wins: ${p2newwincount}`} />

          <button className="btn btn-dark Wbtnp2" onClick={handleClick2} >  <ColorfulText text={' W'} /></button></p>

        <img className="ImgA" src={vsModeImage} alt="VS Mode" />


      </div>
    </div>
  );
}

export default ActivityPage;
