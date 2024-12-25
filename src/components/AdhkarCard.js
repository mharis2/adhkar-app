import React, { useState } from 'react';

const AdhkarCard = ({ dua }) => {
  const [showReference, setShowReference] = useState(false);

  return (
    <div>
      <p>{dua.dua_in_arabic}</p>
      <p>{dua.dua_in_english}</p>
      <p>Repeat: {dua.repeat} times</p>
      <button onClick={() => setShowReference(!showReference)}>
        {showReference ? 'Hide Reference' : 'Show Reference'}
      </button>
      {showReference && <a href={dua.reference} target="_blank">Reference</a>}
    </div>
  );
};

export default AdhkarCard;
