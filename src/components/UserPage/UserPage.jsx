import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorfulText from '../../ColorfulText';
import vsModeImage from './VS Mode.png';

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

      <h2> <ColorfulText text={`Welcome, ${user.username}`} />
      </h2>
      <img src="/Users/adrianbryant/code/folder/Solo-Project/src/components/LoginForm/VS Mode.png" alt="" />
      <button className="btn btn-dark  bgbtn" onClick={handleClick} > <ColorfulText text="New Match" />
      </button>

      <div>
        <br />
        <button className="btn btn-dark bgbtn2" onClick={handleClick1}  ><ColorfulText text="Match History" />
        </button>
      </div>

      <img src={vsModeImage} alt="VS Mode" />
      <br />
      <div>
        <LogOutButton className="btn btn-dark bgbtn" />
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
