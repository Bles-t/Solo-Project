import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import ColorfulText from '../../ColorfulText';
import './LoginPage.css'

import vsModeImage from './VS Mode.png';

function LoginPage() {
  const history = useHistory();

  return (
    <div  >
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >

<img src={vsModeImage} alt="VS Mode" />


<ColorfulText className="register" text={"  Register"} >   </ColorfulText>

        </button>
      </center>
    </div>
  );
}

export default LoginPage;
