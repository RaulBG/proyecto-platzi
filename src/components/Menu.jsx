import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className='header__menu'>
    <ul>
      <li><Link to='/'>Inicio</Link></li>
      <li><a href='login.html'>Iniciar Sesión</a></li>
    </ul>
  </nav>
);

export default Menu;
