import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MatchHistoryPage() {

  const dispatch = useDispatch();




  const matchdata = useSelector((store) => store.matchSetup);
console.log("Match data from store", matchdata);



useEffect(() => {
  console.log('in useEffect');
  const action = { type: 'DISPLAY_MATCHDATA' };
  dispatch(action);
}, []);



console.log("lets see if this work");


const handleDelete = (gameId) => {
  // Dispatch the DELETE_GAME action with the game ID to be deleted
  dispatch({ type: 'DELETE_GAME', payload: gameId });
};

//Renders list of games
const renderGamesList = () => {
  if (Array.isArray(matchdata)) {
    return matchdata.map((game, index) => (
      <li key={index}>
        {game.gameid}
 <button onClick={() => handleDelete(game.gameid)}>Delete</button>
      </li>
    ));

  }

  console.log("lets see if this work" ,matchdata);
  return null;

};

  return (

    <div>
      <h1>Hi History hi </h1>

      <div>
        <h3>List of Games:  </h3>
        <ul>
        {renderGamesList()}
        </ul>
      </div>
    </div>
  )
}
export default MatchHistoryPage;
