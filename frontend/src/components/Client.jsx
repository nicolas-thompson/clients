import React from "react";
import css from "./Client.module.css";
import ClientCreatedDate from "./ClientCreatedDate";

const Client = props => {

  return (

    <div className={css.client}>
      <ClientCreatedDate date={props.client.createdDate} />
      <div className={css.client__description}>
        <h2>{props.client.name}</h2>
        <div>{props.client.email}</div>
        <div>{props.client.company}</div>
      </div>
    </div>
  )
}

export default Client;