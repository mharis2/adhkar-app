import React from 'react';
import adhkar from '../assets/adhkar.json';
import AdhkarCard from '../components/AdhkarCard';
import './EveningAdhkar.css'; // Import custom styles for this component

const EveningAdhkar = () => (
  <div className="evening-adhkar-container">
    <h1 className="evening-adhkar-title">EVENING ADHKAR</h1>
    <div className="adhkar-list">
      {adhkar.evening.map((dua, index) => <AdhkarCard key={index} dua={dua} />)}
    </div>
  </div>
);

export default EveningAdhkar;
