import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class Logout extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <a onClick={() => this.logOut()}>Log out</a>;
    }
    return <div>{logOutButton}</div>;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});
export default connect(mapStateToProps)(Logout);
