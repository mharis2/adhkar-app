import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Adhkar App</h1>
    <Link to="/morning">Morning Adhkar</Link>
    <Link to="/evening">Evening Adhkar</Link>
  </div>
);

export default Home;
