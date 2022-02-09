import React from "react";

import NewClientForm from "./NewClientForm";

const NewClient = props => {
  const onSaveClientDataHandler = (enteredClientData) => {
    const clientData = {
      ...enteredClientData,
      id: Math.random().toString()
    }
    props.onAddClient(clientData);
  };

  return <div>
    <NewClientForm onSaveClientData={onSaveClientDataHandler} />
  </div>
};

export default NewClient;