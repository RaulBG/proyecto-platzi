import React from 'react';
import '../assets/styles/Results.scss';

const Results = () => (
  <section className='resultados'>
    <h2 className='resultados__titulo'>Próximos vuelos</h2>
    <form className='resultados__form'>
      <label htmlFor='destino'>
        Elije tu destino
        <select name='destino' id='destino'>
          <option value='CDMX'>CDMX</option>
        </select>
      </label>
    </form>
    <div className='resultados__horarios'>
      <ul>
        <li><a href='/'>10:00</a></li>
        <li><a href='/'>12:00</a></li>
        <li><a href='/'>13:30</a></li>
        <li><a href='/'>16:00</a></li>
      </ul>
    </div>
  </section>
);

export default Results;
