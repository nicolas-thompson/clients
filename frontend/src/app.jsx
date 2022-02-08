import React, { useEffect } from "react";
import ClientList from "./pages/ClientList";
import { useState } from 'react';

const App = () => {
  const [clients, setClients] = useState(false);

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
      {clients && <ClientList clients={clients} />}
    </div>
  );
};

export default App;
