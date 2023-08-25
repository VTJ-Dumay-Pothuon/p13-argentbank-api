import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loginUser } from '../actions/login.action'
import '../styles/Login.scss'

function Login() {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, token, error } = useSelector(state => state.login)

    useEffect(() => {
      document.title = "Argent Bank - Sign in"
      if (token) { navigate('/user') }
    }, [token]);

    const handleLogin = e => {
        e.preventDefault()
        dispatch(loginUser(email, password, rememberMe))
    };

    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={e => setemail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </section>
      </main>
    );
  }

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  token: PropTypes.string,
  error: PropTypes.string,
  dispatch: PropTypes.func
};

export default Login