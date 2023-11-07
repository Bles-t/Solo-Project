import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ColorfulText from '../../ColorfulText';
function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Changed <a> to <Link> for react-router-dom and removed href */}
        <Link className="navbar-brand" to="/home">
        <ColorfulText text="V.S Mode"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Conditionally render links based on user authentication */}
            {!user.id ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login"> <ColorfulText text="Login / Register"/></Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/user">
                  <ColorfulText text="Home"/></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/info"><ColorfulText text="Info Page"/></Link>
                </li>
                {/* Logout button might need to be adjusted if it is not a <Link> component */}
                <li className="nav-item">
                  <LogOutButton className="nav-link" />
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about"><ColorfulText text="About"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
