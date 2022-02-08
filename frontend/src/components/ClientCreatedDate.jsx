import React from "react";

const ClientCreatedDate = props => {

  const day = new Date(props.date).toLocaleString('en-GB', { day: '2-digit' });
  const month = new Date(props.date).toLocaleString('en-GB', { month: 'long' });
  const year = new Date(props.date).toLocaleString('en-GB', { year: 'numeric' });

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  )
}

export default ClientCreatedDate;