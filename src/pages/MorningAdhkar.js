import React from 'react';
import adhkar from '../assets/adhkar.json';
import AdhkarCard from '../components/AdhkarCard';

const MorningAdhkar = () => (
  <div>
    <h2>MORNING ADHKAR</h2>
    {adhkar.morning.map((dua, index) => <AdhkarCard key={index} dua={dua} />)}
  </div>
);

export default MorningAdhkar;
