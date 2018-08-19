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
      <header className="header">
        <nav>
        <Link className="logo" to="/"><strong>Sticky Note</strong></Link>

          <div className="header-right">
                    <Link className="login-status" to="/">Home</Link>
                    {/* <a href="#about"><Link to="/about">About</Link></a> */}
                    {this.props.loggedIn && <Link to="/dashboard">Dashboard</Link> }
                    {!this.props.loggedIn && <Link to="/login">Login</Link> }
                    {!this.props.loggedIn && <Link to="/signup">Sign Up</Link> }
                    <Logout />
                </div>
        </nav>
        </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(Nav);
