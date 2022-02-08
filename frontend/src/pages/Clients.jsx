import React from "react";

const Clients = props => {
  return <ul>
    {props.clients.map(client => <li key={client._id}>{client.name}</li>)}
  </ul>
}

export default Clients;