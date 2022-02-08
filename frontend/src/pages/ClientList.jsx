import React from "react";

import Client from "../components/Client";

const ClientList = props => {

  return <React.Fragment>
    {props.clients.map(client => <Client key={client._id} client={client} />)}
  </React.Fragment>
}

export default ClientList;