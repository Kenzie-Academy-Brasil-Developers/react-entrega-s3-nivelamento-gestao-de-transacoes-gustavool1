import './App.css';
import { useState } from 'react';
import Register from './components/Register';
import Display from './components/Display';
import ToggleList from './components/ToggleList';

function App() {
  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
  ])
  const [ showEntry, setShowEntry ] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <div className='registers-container'>
          <Register   transactions={ transactions } setTransactions={ setTransactions }/>
        </div>
        <ToggleList showEntry={ showEntry } setShowEntry={ setShowEntry }/>
        <Display transactions={ transactions } showEntry={showEntry}/>
      </header>
    </div>
  );
}

export default App;
