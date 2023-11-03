import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MatchHistoryPage() {

  const history = useHistory()
  const dispatch = useDispatch();
  const matchdata = useSelector((store) => store.matchSetup);



  useEffect(() => {
    console.log('in useEffect');
    const action = { type: 'DISPLAY_MATCHDATA' };
    dispatch(action);
  }, []);


  const handleGameClick = (selectedGame) => {
    console.log('Selected Game:', selectedGame);
    history.push('/SavedGamePage', {
      gameData: {
        winner: selectedGame.winner,
        loser: selectedGame.loser,
        gamename: selectedGame.gamename,
        p1wincount: selectedGame.p1wincount,
        p2wincount: selectedGame.p2wincount

      }
    });
  }

  console.log('match data array data', matchdata);

  const removeGame = (e) => {
    e.preventDefault();
    dispatch({ type: 'DELETE_GAME', payload: matchdata });
  }


  return (

    <div>
      <h1>Hi History</h1>

      <div>
        <h3>List of Games:  </h3>
        <ul>

          {matchdata.map((game, index) => (
            <li>
              <button key={index} onClick={() => handleGameClick(game)}>{game.gameid}</button>
              <button onClick={removeGame}>Remove</button>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}
export default MatchHistoryPage;
