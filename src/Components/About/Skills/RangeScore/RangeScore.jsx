import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RangeScore.scss';

const RangeScore = () => {
  const scoreData = [
    { label: 'Timebound Delivery', score: 97 },
    { label: 'Communication and Cooperation', score: 94 },
    { label: 'Quality Control', score: 97 },
    { label: 'Manufacturing Checks and Assurance', score: 98 },
  ];

  const [currentScores, setCurrentScores] = useState(Array(scoreData.length).fill(0));

  useEffect(() => {
    const intervalIds = scoreData.map((item, index) => {
      return setInterval(() => {
        setCurrentScores((prevScores) => {
          const newScores = [...prevScores];
          if (newScores[index] < item.score) {
            newScores[index] += 1;
          } else {
            clearInterval(intervalIds[index]);
          }
          return newScores;
        });
      }, 10);
    });

    return () => intervalIds.forEach(clearInterval);
  }, [scoreData]);

  return (
    <div className="RangeScore container">
      <div className="row">
        <div className="RC-Cont">
            <p>OUR SKILLS AND EXPERTISE</p>
            <h2><b>Expertise,</b> Discipline <br /> and Precision
            </h2>
        </div>
        <div className="RC-rng">
          {scoreData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between">
                <span>{item.label}</span>
                <span className="score">{currentScores[index]}%</span>
              </div>
              <div className="progress slide-animation">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${currentScores[index]}%`,
                  }}
                  aria-valuenow={item.score}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RangeScore;
