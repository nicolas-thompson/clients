import React from "react";

const Client = props => {

  return (
    <li key={props.client._id}>{props.client.name}</li>
  )
}

export default Client;