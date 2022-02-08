import React from "react";
import Clients from "./pages/Clients";

const App = () => {

  const clients = [{ _id: 1, name: 'Nicolas Thompson', email: 'mail@nicolasthompson.com', createdDate: new Date(), company: 'Thompson Software Ltd' }];

  return (
    <div>
      <h1>EVPro Full-stack Test</h1>
      <Clients clients={clients} />
    </div>
  );
};

export default App;
