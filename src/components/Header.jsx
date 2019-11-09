import React from 'react';
import '../assets/styles/header.scss';

const Header = () => (
  <header className='header'>
    <nav className='header__menu'>
      <ul>
        <li><a href='/'>Inicio</a></li>
        <li><a href='login.html'>Iniciar Sesión</a></li>
      </ul>
    </nav>
    <section className='header__content'>
      <div className='header__content--blur'>
        <h1 className='header__content__title'>NOMBRE DE LA AEROLINEA</h1>
        <h2 className='header__content__subtitle'>Busca tu vuelo ideal</h2>
      </div>
    </section>
  </header>
);

export default Header;
