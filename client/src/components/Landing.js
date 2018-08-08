import React, { Component } from 'react';
import Nav from './Nav';
import '../App.css';
import '../containers/Login.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <main>
            <h1>
              <strong>This will be Landing page!</strong>
            </h1>
          </main>
        </div>
      </div>
    );
  }
}

export default Landing;
