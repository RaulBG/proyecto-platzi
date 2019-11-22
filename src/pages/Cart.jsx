import React from 'react';
import Menu from '../components/Menu';
import '../assets/styles/Cart.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://';

const Cart = () => {
  const initialState = useInitialState(API);
  console.log(initialState);
  return (
    <>
      <Menu />
      <div className='cart'>
        <div className='cart__header'>
          <h1>Carrito de compras</h1>
          {/* <a href='/'>Continuar navegando</a> */}
        </div>
        <ul className='cart__list'>
          { initialState.cart.length > 0 ?
            initialState.cart.map((fly) => {
              return (
                <>
                  <li className='cart__list__element'>
                    <h1>Ciudad de México - Madrid, España</h1>
                    <input type='number' placeholder='No. Boletos' />
                    <p>$100</p>
                    <button type='button'>x</button>
                  </li>
                  <button className='cart__button' type='button'>Pagar $200</button>
                </>
              );
            }) :
            (
              <>
                <p>No ha agregado vuelos aún</p>
                <a href='/'>Continuar comprando</a>
              </>
            ) }
        </ul>
      </div>
    </>
  );
};

export default Cart;
