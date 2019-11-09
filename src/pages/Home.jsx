import React from 'react';
import '../assets/styles/index.scss';
import Header from '../components/Header';
import Results from '../components/Results';
import NoCuenta from '../components/NoCuenta';

const Home = () => (
  <>
    <Header />
    <Results />
    <NoCuenta />
  </>
);

export default Home;
