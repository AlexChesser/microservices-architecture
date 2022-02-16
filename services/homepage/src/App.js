import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(!isLoaded){
      fetch("/api/weatherforecast")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>View console to see query result of {items.length} items from the <a href="/api/weatherforecast">dotnet container</a></div>
        <div>click here to view the result of the <a href="/nest">nestjs container</a></div>
        <div>{error}</div>
      </header>
    </div>
  );
}

export default App;
