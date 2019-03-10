import React, { Component } from 'react';
import './Identity.css';

class Identity extends Component {
  render() {
    return (
      <div className="App">
        <section id="main">
            <div className="profile">
                <div className="avatar">
                  <img src="images/profile.jpeg" alt="" />
                </div>
                <div>
                  <h1>Konuko Jodom</h1>
                  <p>Futurist | Developer | Engineer</p>
                </div>
            </div>
            <div className="social-well">
              <a target="blank_" href="https://twitter.com/@konuko_j" className="fa-twitter">Twitter</a>
              <a target="blank_" href="https://linkedin.com/in/konukojodom" className="fa-linkedin">LinkedIn</a>
              <a target="blank_" href="https://github.com/jodom" className="fa-github">Github</a>
            </div>
            <div className="blog-cta">
                <a target="blank_" href="https://github.com/jodom">READ MY MUSINGS <i className="fa fa-medium"></i></a>
            </div>
        </section>
      </div>
    );
  }
}

export default Identity;
