import React from "react";
import css from "./Client.module.css";

const Client = props => {

  const day = new Date(props.client.createdDate).toLocaleString('en-GB', { day: '2-digit' });
  const month = new Date(props.client.createdDate).toLocaleString('en-GB', { month: 'long' });
  const year = new Date(props.client.createdDate).toLocaleString('en-GB', { year: 'numeric' });

  return (

    <div className={css.client}>
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className={css.client__description}>
        <h2>{props.client.name}</h2>
        <div>{props.client.email}</div>
        <div>{props.client.company}</div>
      </div>
    </div>
  )
}

export default Client;