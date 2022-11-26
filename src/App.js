import logo from './logo.svg';
import './App.css';
import TerminalText from './components/TerminalText/TerminalText';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState("change is inevitable");
  const [inputValue,setInputValue] = useState("");

  const handleClick = (event) => {
    setValue(() => inputValue)
  }

  const handleSearch = (event) => {
    setInputValue(() => event.target.value)
  }


  return (
    <div className="App">
      <TerminalText value={value}/>

      <input onChange={handleSearch}></input>
      <button onClick={handleClick}>Test text</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
