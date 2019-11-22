import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/BuyFly.scss';

const BuyFly = (props) => {
  return (
    <div className='buy__container'>
      <h1>Ciudad de México - Madrid, España</h1>
      <h2>Jul 8</h2>
      <p>10:00 ... 16:30</p>
      <Link to='/cart'>Comprar vuelo</Link>
    </div>
  );
};

export default BuyFly;
