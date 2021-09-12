import React from 'react';
import { hot } from 'react-hot-loader';

import Scene from './components/Scene';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Scene />
    </>
  );
};

export default hot(module)(App);
