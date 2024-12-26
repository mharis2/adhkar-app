import React, { useState } from 'react';
import './AdhkarCard.css';

const AdhkarCard = ({ dua }) => {
  const [showReference, setShowReference] = useState(false);

  return (
    <div className="adhkar-card">
      <p className="adhkar-recitation">Recite {dua.repeat} times</p>
      <p className="adhkar-arabic">{dua.dua_in_arabic}</p>
      <p className="adhkar-translation">{dua.dua_in_english}</p>
      <button
        className="adhkar-reference-button"
        onClick={() => setShowReference(!showReference)}
      >
        {showReference ? 'Hide Reference ▲' : 'Show Reference ▼'}
      </button>
      {showReference && (
        <div className="adhkar-reference">
          <p className="hadith-narration">{dua.hadith_in_english}</p>
          <a
            href={dua.reference}
            target="_blank"
            rel="noopener noreferrer"
            className="reference-link"
          >
            {dua.hadith_reference}
          </a>
        </div>
      )}
    </div>
  );
};

export default AdhkarCard;
