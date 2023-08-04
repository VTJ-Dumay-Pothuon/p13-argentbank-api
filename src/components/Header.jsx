import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import argentBankLogo from '../assets/images/argentBankLogo.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction pour basculer l'état de connexion
  const toggleLoginStatus = () => {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/index">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLoggedIn ? ( // Si l'utilisateur est connecté, afficher ces liens
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link className="main-nav-item" to="/index" onClick={toggleLoginStatus}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        // Si l'utilisateur n'est pas connecté, afficher ces liens
        <div>
          <Link className="main-nav-item" to="/sign-in" onClick={toggleLoginStatus}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;