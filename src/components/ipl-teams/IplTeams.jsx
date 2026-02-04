import React from 'react'
import { Link } from 'react-router-dom'

const IPLTeams = () => {
  const teams = [
    'Chennai Super Kings',
    'Mumbai Indians',
    'Royal Challengers Bangalore',
    'Kolkata Knight Riders',
    'Rajasthan Royals',
    'Delhi Capitals',
    'Sunrisers Hyderabad',
    'Punjab Kings',
    'Lucknow Super Giants',
    'Gujarat Titans'
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>IPL Teams</h1>

      <ul style={{ listStyle: 'none' }}>
        {teams.map((team, index) => (
          <li key={index}>
            <Link to={`/players/${team.toLowerCase().replace(/ /g, '-')}`}>
              {team}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IPLTeams;   // ✅ MUST
