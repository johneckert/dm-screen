import React, { useState, createContext } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/layout/Header';
import ScreenArea from './components/layout/ScreenArea';

function App() {
  return (
    <>
      <Header />
      <ScreenArea />
    </>
  );
}

export default App;
