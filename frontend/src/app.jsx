import React, { useEffect } from "react";
import Clients from "./pages/Clients";
import { useState } from 'react';

const App = () => {
  const [clients, setClients] = useState({});

  useEffect(() => {

    fetch('http://localhost:3001/client')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch clients.');
        }
        return res.json();
      })
      .then(resData => {
        setClients(resData.clients);
      })
      .catch(err => { console.log(err) });

  }, [])

  return (
    <div>
      <h1>EVPro Full-stack Test</h1>
      <Clients clients={clients} />
    </div>
  );
};

export default App;
