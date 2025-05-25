import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import './Stats.css';

const statsData = [
   {
    label: "Patients readmitted",
    value: 25,
    suffix: "%",
  },
  { label: "life's can be saved for a readmitted patient ", value: 80, suffix: "%" },
  { label: "Accuracy", value: 91, suffix: "%" },
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
