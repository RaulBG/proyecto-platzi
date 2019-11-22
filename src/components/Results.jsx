import React from 'react';
import '../assets/styles/Results.scss';
import useInitialState from '../hooks/useInitialState';
import FlyItem from './FlyItem';

const API = '';

const Results = () => {
  const initialState = useInitialState(API);
  return (
    <section className='resultados'>
      <h2 className='resultados__titulo'>Próximos vuelos</h2>
      <form className='resultados__form'>
        <label htmlFor='destino'>
          Elije tu destino
          <select name='destino' id='destino'>
            <option value='nacional'>Nacional</option>
            <option value='internacional'>Internacional</option>
          </select>
        </label>
      </form>
      <div className='resultados__flies'>
        {initialState.flies.map((fly) => {
          return (<FlyItem {...fly} key={fly.id} />);
        }) }
      </div>
    </section>
  );
};

export default Results;
