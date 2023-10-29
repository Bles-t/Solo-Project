import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function MatchHistoryPage() {

  const history = useHistory()
  const dispatch = useDispatch();
  const gameList = useSelector((store) => store.GameList);
  const playerOne = useSelector((store) => store.PlayerOne);
  const playerTwo = useSelector((store) => store.PlayerTwo);


  useEffect(() => {
    console.log('in useEffect');
    dispatch({ type: 'ALL_GAMES' });
  }, [dispatch]);

  const handleGameClick = (selectedGameName) => {
    // Find the selected game object based on the name
    console.log('Before navigation');
    const selectedGame = gameList.find(game => game.gamename === selectedGameName);

    if (selectedGame) {
      history.push('/ActivityPage', { gameData: { ...selectedGame, playerOne, playerTwo } });
    }
    console.log('After navigation');
  }

  return (

    <div>
      <h1>Hi History</h1>

      <div>
        <h3>List of Games:  </h3>
        <ul>

          {gameList.map((game, index) => (
            <li>
              <button key={index} onClick={() => handleGameClick(game.gamename)}>{game.gamename}</button>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}
export default MatchHistoryPage;
