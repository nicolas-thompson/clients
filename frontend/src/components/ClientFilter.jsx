import React from 'react';

import css from './ClientFilter.module.css';

const ClientFilter = props => {

  const searchChangeHandler = event => {
    props.onSearch(event.target.value);
  }

  return (
    <div className={css['client-filter']} >
      <div className={css['client-filter__control']}>
        <label>Filter by name</label>
        <input type="text" name="search" id="search" onChange={searchChangeHandler} />
      </div>
    </div>
  );
};

export default ClientFilter;