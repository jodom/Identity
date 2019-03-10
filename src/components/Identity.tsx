import React, { Component } from 'react';
import './Identity.css';

export const Identity  = React.memo(() => {
  return (
    <div className="Identity">
      <div className="profile">
        <div className="avatar">
          <img src="images/profile.jpeg" alt="" />
        </div>
        <div>
          <h1>Konuko Jodom</h1>
          <p>ENGINEER ART SOFTWARE</p>
        </div>
      </div>
      <div className="social-well">
        <a target="blank_" href="https://github.com/jodom" className="fa fa-github">Github</a>
        <a target="blank_" href="https://linkedin.com/in/konukojodom" className="fa fa-linkedin">LinkedIn</a>
        <a target="blank_" href="https://twitter.com/@konuko_j" className="fa fa-twitter">Twitter</a>
      </div>
      <div className="blog-cta">
        <a target="blank_" href="https://medium.com/konuko_j">READ MY MUSINGS</a>
      </div>
    </div>
  );
});
