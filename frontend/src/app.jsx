import React, { useEffect } from "react";
import ClientList from "./pages/ClientList";
import NewClient from "./components/NewClient";
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

  }, []);

  const addClientHandler = (client) => {
    fetch('http://localhost:3001/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: client.name,
        email: client.email,
        createdDate: new Date(),
        company: client.company,
      })
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Creating a new client failed here');
      }
      console.log(res);
      return res.json();
    }).then(resData => {
      setClients((prevState) => [...prevState, resData.client]);
      console.log(clients);
    }).catch(err => {
      console.log(err)
    });
  };

  return (
    <div>
      <h1>EVPro Full-stack Test</h1>
      <NewClient onAddClient={addClientHandler} />
      {clients && <ClientList clients={clients} />}
    </div>
  );
};

export default App;
