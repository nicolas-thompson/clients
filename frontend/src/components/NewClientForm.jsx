import React, { useState } from "react";

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
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={client.name} id="name" onChange={nameChangeHandler} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={client.email} id="email" onChange={emailChangeHandler} />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" value={client.company} id="company" onChange={companyChangeHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add Client</button>
      </div>
    </form>
  );
};


export default NewClientForm;