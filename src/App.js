import React, {useState} from 'react';
import TeamList from './components/teamlist'

function App() {
  const [members, setMembers] = useState([
    { name: 'Liam',
    email: 'inquiry@liammoore.codes',
    role: 'Web Developer' }
  ]);

  
  return (
    <div>
      <TeamList members={members} setMembers={setMembers}></TeamList>
    </div>
  );
}

export default App;
