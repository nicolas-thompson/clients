import React from "react";

import Client from "../components/Client";

const ClientList = props => {

  return <React.Fragment>
    <ul>
      {props.clients.map(client => <Client key={client._id} client={client} />)}
    </ul>
  </React.Fragment>
}

export default ClientList;