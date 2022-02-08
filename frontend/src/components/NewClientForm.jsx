import React from "react";

const NewClientForm = props => {
  return <form>
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />
      </div>
    </div>
    <div>
      <button type="submit">Add Client</button>
    </div>
  </form>
};


export default NewClientForm;