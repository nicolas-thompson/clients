import React from "react";

import Client from "../components/Client";
import css from "./ClientList.module.css";

const ClientList = props => {

  return (
    <div className={css.clientList}>
      {props.clients.map(client => <Client key={client._id} client={client} />)}
    </div>
  );
}

export default ClientList;