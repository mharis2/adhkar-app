import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Daily Adhkar</h1>
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
      <button
        className="timing-button"
        onClick={toggleDetails}
      >
        Timing of Morning and Evening Adhkar{' '}
        {isExpanded ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
      </button>
      {isExpanded && (
  <div className="timing-details">
    <h2>The Time for the Morning & Evening Adhkar</h2>
    <p>
      <strong>The Prophet (ﷺ) said:</strong>
    </p>
    <blockquote>
      "That I sit with people remembering Allah, the Most High, from the dawn prayer until the sun rises is more beloved to me than freeing four slaves from the children of Isma'eel ('Alaihis-Salaam). And that I sit with people remembering Allah from the late afternoon ('Asr) prayer until the sun sets is more beloved to me than freeing four [slaves from among the children of Isma'eel ('Alaihis-Salaam)]."
    </blockquote>
    <p>
      [Reported by Aboo Dawood, no. 3667. Al-Albaanee classified it as Hasan (good, acceptable) in Saheeh Aboo Dawood, 2/698]
    </p>
    <p>
      <strong>Shaykh Abdul Razzaq Al Badr (حفظه الله) said:</strong>
    </p>
    <blockquote>
      The time period for these private devotional recitations (i.e. words of remembrance) is <em>as-Sabah al-Bakir</em> (early morning) from immediately following the dawn (Subh) prayer up until just before the rising of the sun. As for the evening (period) which is called <em>al-'Asheey</em> and <em>al-A'sal</em>, its time is from immediately following the late afternoon ('Asr) prayer up until just before the setting of the sun.
    </blockquote>
    <blockquote>
      The best time to recite the ‘morning and evening words of remembrance’ is after the Fajr (Dawn) prayer until sunrise, and after the ‘Asr (late afternoon) prayer until sunset.
    </blockquote>
    <blockquote>
      That being said, the matter (of its time) is not strictly limited to the times between Fajr and sunrise, or between 'Asr and sunset. In Shaa Allah, such that if a person forgot that (recitation) in its time, or something happened [which prevented him from performing it in its time], then, there is no harm in reciting the <em>Adhkar as-Sabah</em> (morning words of remembrance) after the rising of the sun and the <em>Adhkar al-Masa'</em> (evening words of remembrance) after the setting of the sun.
    </blockquote>
    <p>
      [Explanation of the Morning and Evening Adhkar, Second Edition, Shaykh Abdur-Razzaq ibn Abdul-Muhsin al-Badr]
    </p>
  </div>
)}

    </div>
  );
};

export default Home;
