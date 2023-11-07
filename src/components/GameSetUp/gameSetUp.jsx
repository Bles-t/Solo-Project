import React from "react"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ColorfulText from "../../ColorfulText";
import './gameSetUp.css'


function GameSetUp() {

  const dispatch = useDispatch()

  const history = useHistory()

  const [newMatch, setNewMatch] = useState({
    playerOne: '',
    playerTwo: '',
    gamename: '',
    matchTitle: '',
    p1wincount: 0, // Initialize with 0
    p2wincount: 0,
    userId: 'userId',

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("new match data", newMatch);
    dispatch({
      type: 'SET_MATCH_DETAILS',
      payload: newMatch,
    });

    setNewMatch({
      playerOne: '',
      playerTwo: '',
      matchTitle: '',
      gamename: '',
      p1wincount: 0,
      p2wincount: 0,
      userId: 0,
    });
    history.push('/ActivityPage', { newmatch: newMatch });
  };

  //



  return (
    <div className="container">





      <form onSubmit={handleSubmit}   >



        <h2> <ColorfulText text="Enter Match Details" /></h2>




        <div className="form-floating mb-3">

          <input  name="name" placeholder="Player 1" type="text" class="form-control" id="floatingInput" value={newMatch.playerOne} onChange={(event) => setNewMatch({ ...newMatch, playerOne: event.target.value })} />
          <label for="floatingInput"><ColorfulText text="Player 1" /></label>
        </div>


        <div class="form-floating">

          <input name="name" placeholder="Player 2" type="text" class="form-control" id="floatingInput" value={newMatch.playerTwo} onChange={(event) => setNewMatch({ ...newMatch, playerTwo: event.target.value })} />
          <label for="floatingInput"><ColorfulText text="Player 2" /></label>

        </div>


        <div class="form-floating">
          {/* may add this back if im having issue swith gmaelist.map later on */}
          <input name="name" placeholder="Game Title" type="text" class="form-control" id="floatingInput" value={newMatch.gamename} onChange={(event) => setNewMatch({ ...newMatch, gamename: event.target.value })} />

          <label for="floatingInput"><ColorfulText text="Game Name" /></label>

        </div>

        <div class="form-floating">

          <input name="name" placeholder="Match Title" type="text" class="form-control" id="floatingInput" value={newMatch.matchTitle} onChange={(event) => setNewMatch({ ...newMatch, matchTitle: event.target.value })} />

          <button  className="btn btn-dark bgbtn"  type='submit'>
            <ColorfulText text="Fight!" /></button>

          <label for="floatingInput"><ColorfulText text="Match Name" /></label>

        </div>



      </form>

    </div>
  )
}




export default GameSetUp;
