import React from 'react';
import adhkar from '../assets/adhkar.json';
import AdhkarCard from '../components/AdhkarCard';
import './MorningAdhkar.css'; // Import custom styles for this component

const MorningAdhkar = () => (
  <div className="morning-adhkar-container">
    <h1 className="morning-adhkar-title">MORNING ADHKAR</h1>
    <div className="adhkar-list">
      {adhkar.morning.map((dua, index) => <AdhkarCard key={index} dua={dua} />)}
    </div>
  </div>
);

export default MorningAdhkar;
