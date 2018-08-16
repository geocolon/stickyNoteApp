import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Login from '../containers/Login';
import { Link, Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  // If we are logged in (which happens automatically when Login
  // is successful) redirect to the user's dashboard
  render() {
    // console.log('Checking props',this.props)
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <Nav />
        <Login />
        <br />
        <center>
          <Link className="links" to="/">Not registered? Sign up</Link>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('This is the state on Reg page',state)
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(LoginPage);
