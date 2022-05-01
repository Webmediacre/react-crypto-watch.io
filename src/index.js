
// react import
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from './contexts/theme';
// import ButtonLinks from './components/ButtonLinks';

// import CrytoContext to be used in whole app
import CrytoContext from './CrytoContext';

import 'react-alice-carousel/lib/alice-carousel.css';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <CrytoContext>
      <App />
    </CrytoContext> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


