import React from 'react';
import '../assets/styles/NoCuenta.scss';

const NoCuenta = () => (
  <div className='cuenta'>
    <p className='cuenta__parrafo'>
      ¿Aún no tienes cuenta?
      <a href='register.html'>
        registrate ahora
      </a>
    </p>
  </div>
);

export default NoCuenta;
