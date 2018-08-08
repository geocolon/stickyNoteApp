import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Dashboard from '../containers/Dashboard';
import { Redirect } from 'react-router-dom';

class DashboardPage extends React.Component {
  // If we are logged in (which happens automatically when Login
  // is successful) redirect to the user's dashboard
  render() {
    // console.log('Checking props',this.props)
    if (!this.props.loggedIn) {
      console.log('Is Login Redirect working? Yes');
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Nav />
        <Dashboard />
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

export default connect(mapStateToProps)(DashboardPage);
