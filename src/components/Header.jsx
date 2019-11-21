import React from 'react';
import '../assets/styles/header.scss';
import Menu from './Menu';
import HeaderHome from './HeaderHome';

const Header = () => (
  <header className='header'>
    <Menu />
    <HeaderHome />
  </header>
);

export default Header;
