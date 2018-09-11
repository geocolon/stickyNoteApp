import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import RegistrationForm from '../containers/Registration-Form';
import { Link, Redirect } from 'react-router-dom';

class RegistrationPage extends React.Component {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="home">
        <Nav />
        <RegistrationForm />
        <center>
        <Link className="links" to="/login">Log in</Link>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(RegistrationPage);
