import React from "react";

import NewClientForm from "./NewClientForm";
import css from "./NewClient.module.css";

const NewClient = props => {
  const onSaveClientDataHandler = (enteredClientData) => {
    const clientData = {
      ...enteredClientData,
      id: Math.random().toString()
    }
    props.onAddClient(clientData);
  };

  return <div className={css['new-client']}>
    <NewClientForm onSaveClientData={onSaveClientDataHandler} />
  </div>
};

export default NewClient;