import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../containers/Logout';
import './Nav.css';

class Nav extends React.Component {
  render() {
    if (this.props.loggedIn) {
      // document.getElementsByClassName("login-status").style.display="none";
    }
    return (
      <div>
        <div className="mobile-nav-space" />
        <nav>
          <button className="hamburger" />
          <ul className="topnav">
            <li>
              <Logout />
            </li>
            {!this.props.loggedIn && (
              <li className="login-status">
                <Link to="/signup">Sign Up</Link>
              </li>
            )}
            {!this.props.loggedIn && (
              <li className="login-status">
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('This is the state on Reg page',state)
  return {
    loggedIn: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(Nav);
