import React from 'react';
import adhkar from '../assets/adhkar.json';
import AdhkarCard from '../components/AdhkarCard';

const EveningAdhkar = () => (
  <div>
    <h2>Evening Adhkar</h2>
    {adhkar.evening.map((dua, index) => <AdhkarCard key={index} dua={dua} />)}
  </div>
);

export default EveningAdhkar;
