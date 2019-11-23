import React from 'react';
import Menu from '../components/Menu';
import '../assets/styles/NotFound.scss';

const NotFound = () => {
  return (
    <>
      <Menu />
      <div className='NotFound'>
        <h1>La página que busca no se encuentra</h1>
      </div>
    </>
  );
};

export default NotFound;
