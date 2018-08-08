import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import RegistrationForm from '../containers/Registration-Form';
import { Link, Redirect } from 'react-router-dom';

class RegistrationPage extends React.Component {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  render() {
    // console.log('Checking props',this.props)
    if (this.props.loggedIn) {
      console.log('Is this working?');
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="home">
        <Nav />
        <h2> Register for App {this.props.loggedIn}</h2>
        <RegistrationForm />
        <Link to="/login">Login</Link>
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

export default connect(mapStateToProps)(RegistrationPage);
