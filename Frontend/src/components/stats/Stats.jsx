import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import './Stats.css';

const statsData = [
   {
    label: "Readmission cases",
    value: 25,
    suffix: "%",
  },
  { label: "Life's that can be saved using this information", value: 80, suffix: "%" },
  { label: "Accuracy", value: 93, suffix: "%" },
];

function Stats() {
  useEffect(() => {
  }, []);

  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        <h2 className="stats-title">Statistics</h2>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-box">
              <p className="stat-number">
                <CountUp end={stat.value} duration={4} suffix={stat.suffix} />
              </p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
