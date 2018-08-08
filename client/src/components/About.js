import React, { Component } from 'react';
import Nav from './Nav';

import '../App.css';

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <main>
            <h1>
              <strong>This will be About page!</strong>
            </h1>
          </main>
        </div>
      </div>
    );
  }
}

export default About;
