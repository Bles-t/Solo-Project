import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import ColorfulText from '../../ColorfulText';
import { Button } from 'bootstrap';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (


    <form className="formPanel" onSubmit={login}>
      <div  className="container" >
      <h2><ColorfulText  text={"Login"} /> </h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
        <ColorfulText  text={" Username:  "} />
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
        <ColorfulText  text={"  Password:  "} />
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

      </div>

      <div>
        <button className="btn btn-dark " type="submit" name="submit" value="Log In">     <ColorfulText  text={" Login"} />  </button>
      </div>
      </div>
    </form>

  );
}

export default LoginForm;
