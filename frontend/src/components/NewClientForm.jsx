import React, { useState } from "react";

import css from "./NewClientForm.module.css";

const NewClientForm = props => {

  const [client, setClient] = useState({
    _id: Math.random().toString(),
    name: "",
    email: "",
    createdDate: new Date(),
    company: "",
  });

  const nameChangeHandler = event => {
    setClient((prevState) => ({ ...prevState, name: event.target.value }));
  }
  const emailChangeHandler = event => {
    setClient((prevState) => ({ ...prevState, email: event.target.value }));
  }
  const companyChangeHandler = event => {
    setClient((prevState) => ({ ...prevState, company: event.target.value }));
  }

  const submitHandler = event => {
    event.preventDefault();
    props.onSaveClientData(client);
    setClient({
      name: "",
      email: "",
      company: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={css['new-client__controls']}>
        <div className={css['new-client__control']}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={client.name} id="name" onChange={nameChangeHandler} />
        </div>
        <div className={css['new-client__control']}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={client.email} id="email" onChange={emailChangeHandler} />
        </div>
        <div className={css['new-client__control']}>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" value={client.company} id="company" onChange={companyChangeHandler} />
        </div>
      </div>
      <div className={css['new-client__actions']}>
        <button type="submit">Add Client</button>
      </div>
    </form>
  );
};


export default NewClientForm;