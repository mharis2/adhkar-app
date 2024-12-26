import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Sun and Moon icons

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Adhkar App</h1>
    <div className="home-links">
      <Link to="/morning" className="home-button morning-button">
        <FaSun className="icon" />
        Morning Adhkar
      </Link>
      <Link to="/evening" className="home-button evening-button">
        <FaMoon className="icon" />
        Evening Adhkar
      </Link>
    </div>
  </div>
);

export default Home;
