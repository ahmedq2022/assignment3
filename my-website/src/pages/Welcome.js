import React from "react";
import "./Welcome.css";
import { NavLink } from 'react-router-dom';
const Welcome = () => {
  return (
    <div>
      <div class="content">
      <div className="header">
        <div className="header-content">
          <h1 className='lg-heading text-light main-heading'>Welcome To My Website</h1>
          <p className='text-light'>ENJOY YOUR JOURNEY </p>
          <NavLink className="btn btn-outline-danger" to='#'>
            Explore My Webpage
          </NavLink>
        </div>
      </div>

      <div className="hobbies">
        <h1 className="lg-heading text-light">Hobbies:</h1>
        <p className="text-light">Playing the guitar, hiking in the mountains, reading science fiction novels, cooking new recipes.</p>
      </div>
      <div className="skills">
        <h1 className="lg-heading text-light">Skills:</h1>
        <p className="text-light">Web development, graphic design, digital marketing, data analysis.
          Expertise: Front-end web development, UI/UX design, social media marketing, Python programming</p>
      </div>
      <div className="expertise">
        <h1 className="lg-heading text-light">Expertise:</h1>
        <p className="text-light">Front-end web development, UI/UX design, social media marketing, Python programming.</p>
      </div>
      <div className="ambitions">
        <h1 className="lg-heading text-light">Ambitions:</h1>
        <p className="text-light">To start a successful tech startup, travel to every continent, learn a new language every year.</p>
      </div>
      <div className="profession">
        <h1 className="lg-heading text-light">Profession:</h1>
        <p className="text-light">Software engineer, freelance graphic designer, digital marketing consultant, data analyst.</p>
      </div>
      </div>
    </div>
  );
};

export default Welcome;
