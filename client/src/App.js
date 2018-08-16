import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Login from './components/login-page';
import DashboardPage from './components/dashboard-page';
import Logout from './containers/Logout';
// import About from './components/About';
import Landing from './components/Landing';
import ListDashboard from './containers/ListDashboard';
import RegistrationPage from './components/registration-page';
import { refreshAuthToken } from './actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000, // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/signup" component={RegistrationPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/listdashboard" component={ListDashboard} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
