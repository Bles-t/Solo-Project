import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorfulText from '../../ColorfulText';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const user = useSelector((store) => store.user);
  const history = useHistory()


  const handleClick = () => {

    history.push('/GameSetUp')
  }


  const handleClick1 = () => {

    history.push('/MatchHistoryPage')
  }

  return (
    <div className="container">

      <h2>Welcome, {user.username}!
      <ColorfulText text="New Match "  />
      </h2>

        <button className="btn btn-secondary" onClick={handleClick} > <ColorfulText text="New Match" /> 
        </button>

      <div>
        <br />
        <button className="btn btn-secondary" onClick={handleClick1}  >Match History </button>
      </div>
  <div>
      <LogOutButton className="btn btn-primary" />
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
