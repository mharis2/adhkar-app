import React, { useState } from 'react';
import './AdhkarCard.css';

const AdhkarCard = ({ dua }) => {
  const [showReference, setShowReference] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="adhkar-card">
      <h2 className="adhkar-title">{dua.title}</h2>
      <p className="adhkar-recitation">RECITE {dua.repeat} TIMES</p>
      <p className="adhkar-arabic">{dua.dua_in_arabic}</p>
      <p className="adhkar-translation">{dua.dua_in_english}</p>
      <div className="adhkar-actions">
        <button
          className="adhkar-action-button reference-button"
          onClick={() => setShowReference(!showReference)}
        >
          {showReference ? 'HIDE REFERENCE ▲' : 'SHOW REFERENCE ▼'}
        </button>
        <button
          className="adhkar-action-button explanation-button"
          onClick={() => setShowExplanation(!showExplanation)}
        >
          {showExplanation ? 'HIDE EXPLANATION ▲' : 'SHOW EXPLANATION ▼'}
        </button>
      </div>
      {showReference && (
        <div className="adhkar-reference">
          <h3 className="adhkar-section-title">REFERENCE</h3>
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
      {showExplanation && (
        <div className="adhkar-explanation">
          <h3 className="adhkar-section-title">EXPLANATION</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{dua.explanation}</p>
          {dua.explanation_source && (
            <p className="explanation-source">
              [{dua.explanation_source}]
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdhkarCard;
