import { useState } from 'react';
import MoleContainer from './Components/MoleContainer';
import './App.css';

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills =[]
    for(let i=0; i < 9; i++) {
      hills.push(<MoleContainer key={i} score={score} setScore={setScore} />)
    }

    return(
      <div>{hills}</div>
    )
  }
  
  return (
    <div>
      <header>
        <h1>React-A-Mole!</h1>
        <h3>Score: {score}</h3>
      </header>
      <div className='moles'>
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
