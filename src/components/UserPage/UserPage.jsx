import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory()
  const gameList = useSelector((store) => store.GameList);

  useEffect(() => {
    console.log('in useEffect');
    dispatch({ type: 'ALL_GAMES' });
  }, [dispatch]);



  const handleClick = () => {

    history.push('/GameSetUp')
  } 


  const handleClick1 = () => {

    history.push('/MatchHistoryPage')
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <button onClick={handleClick} >New Match</button>
      <button onClick={handleClick1}  >Match History </button>
      <LogOutButton className="btn" />

      <div>
        <h3>List of Games:  </h3>
        <ul>
          {gameList.map((game, index) => (
            <li key={index}>{game}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
