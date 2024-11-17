import React, { useState } from 'react';
import './App.css';
import ReactDom from 'react-dom';

const NameComponent = () => {
  const [userName, setUserName] = useState('');
  const handlesubmit = (event) => {
    event.preventDefault();
    alert(`Halo! Nama kamu: ${userName}!`);
  };
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div className='App'>
    <form onSubmit={handlesubmit}>
      <label>
        Name:
        <input type="text" value={userName} onChange={handleNameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
  };
  const rootElement = document.getElementById('root');
    ReactDom.render(<NameComponent />, rootElement);

    export default NameComponent