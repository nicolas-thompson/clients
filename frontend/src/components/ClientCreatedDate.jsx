import React from "react";
import css from "./ClientCreatedDate.module.css";

const ClientCreatedDate = props => {

  const day = new Date(props.date).toLocaleString('en-GB', { day: '2-digit' });
  const month = new Date(props.date).toLocaleString('en-GB', { month: 'long' });
  const year = new Date(props.date).toLocaleString('en-GB', { year: 'numeric' });

  return (
    <div className={css['client-created-date']}>
      <div className={css['client-created-date__day']}>{day}</div>
      <div className={css['client-created-date__month']}>{month}</div>
      <div className={css['client-created-date__year']}>{year}</div>
    </div>
  )
}

export default ClientCreatedDate;