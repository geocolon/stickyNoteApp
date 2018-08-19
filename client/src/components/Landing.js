import React, { Component } from 'react';
import Nav from './Nav';
import '../index.css';
import './Landing.css';



class Landing extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="row paper">
          <main className="col-12">
          
            <div className="col-3">
            <h2 className="header-title">
              <strong>Sticky Note</strong>
            </h2>
            </div>
            <div className="col-6">
              <h2 className="header-title">
                Make and save Post-it notes on the cloud!
                Thanks for using this application, please read below for more details.  
              </h2>
            </div>
            <div className="col-12">
              <p>
              I wanted to create an application that mimic post it notes. I love using post it notes in my work to orient myself on a project but I always find that they are easily lost and usually in one place. Making this application solved having my notes saved to the cloud so I can have access to our post it notes.
              </p>
            </div>
          </main>
        </div>
        <div className="row paper">
          <h3 className="header-title">How it works!</h3>
            <p>
            Please create your own account by clicking  <code>Sign Up</code> on the navigation bar.
            <br/><br/>
            Check out the demo account if you just want to see how to use it. 
            <br/>
            <code>
            Username: mkim<br/>
            Password: abcdef1234
            </code>
            </p>
        </div>
      </div>
    );
  }
}

export default Landing;
