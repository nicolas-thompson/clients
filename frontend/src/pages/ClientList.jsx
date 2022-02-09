import React, { useState } from "react";

import Client from "../components/Client";
import ClientFilter from "../components/ClientFilter";
import css from "./ClientList.module.css";

const ClientList = props => {

  const [search, setSearch] = useState("");

  const searchChangeHandler = searchTerm => {
    setSearch(searchTerm);
  }

  const filteredClients = props.clients.filter(client => {
    return client.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={css.clientList}>
      <div>
        <ClientFilter onSearch={searchChangeHandler} />
      </div>
      {filteredClients.map(client => <Client key={client._id} client={client} />)}
    </div>
  );
}

export default ClientList;