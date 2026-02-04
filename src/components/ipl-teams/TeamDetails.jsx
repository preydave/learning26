import React from 'react';
import { useParams } from 'react-router-dom';

const teamPlayers = {
  'chennai-super-kings': ['MS Dhoni', 'Ravindra Jadeja', 'Ruturaj Gaikwad'],
  'mumbai-indians': ['Rohit Sharma', 'Jasprit Bumrah', 'Suryakumar Yadav'],
  'royal-challengers-bangalore': ['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell'],
 
};

const TeamDetails = () => {
  const { teamName } = useParams();
  const players = teamPlayers[teamName] || ['No players found'];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Players of {teamName.replace(/-/g, ' ').toUpperCase()}</h2>
      <ul style={{ listStyle: 'none' }}>
        {players.map((player, index) => (
          <li key={index} style={{ margin: '10px 0' }}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetails;
