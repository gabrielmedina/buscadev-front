import React, { useState, useEffect } from 'react';
import api from './services/api';

import './style.scss';

import DevForm from './components/DevForm';
import DevList from './components/DevList';

function App() {
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  useEffect(() => {
    async function getDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    
    getDevs();
    console.log('devs' + devs);
  }, []);

  return (
    <div id="app">
      <DevForm onSubmit={handleAddDev} />

      <main className="main">
        <DevList devs={devs} />
      </main>
    </div>
  );
}

export default App;
