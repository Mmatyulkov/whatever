import React from 'react';
import './About.css';

function About() {
  return (
    <div className="main">
      <div className="first-page"></div>
      <div className="container">
        <div className="about">
          <header className="about-container">
          <h1>Mihhail Matyulkov</h1>
          <h2>Web Developer</h2>
          <p>A very good and cheerful person. Temper extroverted. Not married.</p>
          </header>
          <div className="img"></div>
        </div>
        <div className="statistics">
          <table>
            <tbody></tbody>
            <thead>
            </thead>
          </table>
          <p>statistics</p>
        </div>
      </div>
    </div>
  );
}

export default About;