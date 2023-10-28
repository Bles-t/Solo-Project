import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function MatchHistoryPage() {

  const history = useHistory()
  const dispatch = useDispatch();
  const gameList = useSelector((store) => store.GameList);

  useEffect(() => {
    console.log('in useEffect');
    dispatch({ type: 'ALL_GAMES' });
  }, [dispatch]);

  const handleGameClick = (selectedGame) => {
    history.push('/ActivityPage', { gameData: selectedGame });
  }


  return (

    <div>
      <h1>Hi History</h1>

      <div>
        <h3>List of Games:  </h3>
        <ul>

          {gameList.map((game, index) => (
            <li>
              <button key={index} onClick={() => handleGameClick(game)}>{game.gamename}</button>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}
export default MatchHistoryPage;
