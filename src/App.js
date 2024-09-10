import './App.css';
import Header from './components/Header/Header';
import KuralContainer from './components/KuralContainer/KuralContainer';
import React, { useState, useEffect } from 'react';


function App() {

  const [kuralNumber, setKuralNumber] = useState('');

  useEffect(() => {
    fetchRandomKural();
  
  }, []);

  const handleSearchSubmit = (kuralNumber) => {
    setKuralNumber(kuralNumber);
  }

  const fetchRandomKural = () => {
    setKuralNumber(Math.floor(Math.random() * 1330));
  }

  

  return (
    <>
      <Header onSearchSubmit={handleSearchSubmit} />
      <div className="main-container">
        <KuralContainer kuralNumber={kuralNumber} onRefreshClick={fetchRandomKural} />
        
      </div>
     
    </>
  );
}

export default App;
