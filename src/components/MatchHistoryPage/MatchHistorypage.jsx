import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MatchHistoryPage() {

  const history = useHistory()
  const dispatch = useDispatch();
  const gameList = useSelector((store) => store.GameList);
  const PlayerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo);



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
        gamename: selectedGame.gamename
      }
    });
  }

  console.log('PLayer One array data', PlayerOne);

  return (

    <div>
      <h1>Hi History</h1>

      <div>
        <h3>List of Games:  </h3>
        <ul>

          {PlayerOne.map((game, index) => (
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
