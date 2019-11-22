import React from 'react';
import { Link } from 'react-router-dom';

const FlyItem = (props) => {
  const { name, cost, date } = props;
  return (
    <li>
      <Link to='/fly'>
        <h1>{ name }</h1>
        <p>{ date }</p>
        <p>
          $
          { cost }
        </p>
      </Link>
    </li>
  );
};

export default FlyItem;
