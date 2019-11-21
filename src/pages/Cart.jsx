import React from 'react';
import Menu from '../components/Menu';
import '../assets/styles/Cart.scss';

const Cart = () => (
  <>
    <Menu />
    <div className='cart'>
      <div className='cart__header'>
        <h1>Carrito de compras</h1>
        <a href='/'>Continuar navegando</a>
      </div>
      <ul className='cart__list'>
        <li className='cart__list__element'>
          <h1>Ciudad de México - Madrid, España</h1>
          <input type='number' placeholder='No. Boletos' />
          <p>$100</p>
          <button type='button'>x</button>
        </li>
        <li>
          <h1>Ciudad de México - Madrid, España</h1>
          <input type='number' placeholder='No. Boletos' />
          <p>$100</p>
          <button type='button'>x</button>
        </li>
        <button className='cart__button' type='button'>Pagar $200</button>
      </ul>
    </div>
  </>
);

export default Cart;
