import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../actions/profile.action'
import { logout } from '../actions/logout.action'

import argentBankLogo from '../assets/images/argentBankLogo.png'

function Header() {
  const dispatch = useDispatch();
  const { profileData } = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch]);

  const [isLoggedIn, setIsLoggedIn] = useState(!!profileData);

  useEffect(() => {
    setIsLoggedIn(!!profileData);
  }, [profileData]);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
    setIsLoggedIn(false)
    navigate('/index', { replace: true })
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
      {isLoggedIn ? (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {profileData ? `${profileData.body.firstName}` : 'Loading...'}
          </Link>
          <a className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header