
// react import
import React, { useContext } from 'react';
import { ThemeProvider } from './contexts/theme';
// dom imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components and pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import Newsfeeds from './components/Newsfeeds' 
import KnownledgeBase from './pages/KnownledgeBase';
import Footer from './components/Footer'; 

// styles
import './App.css';
import { makeStyles } from '@material-ui/core'; 

function App() {

  // pass makeStyles() to useStyles and 
  // set object parameters
  const useStyles = makeStyles(() => ({ // object parameters
    App: {
      backgroundColor: '#14161a', 
      color: 'white',
      minHeight: '100vh',
    }
  }));
  // used with className
  const classes = useStyles();

  return (
    <ThemeProvider>
    <BrowserRouter>
      <div className={classes.App}> 
        <Header />
        <Routes>
            <Route index path='/*' element={<HomePage/>}/> 
            <Route path='/Newsfeeds' element={<Newsfeeds/>}/>   
            <Route path='/KnownledgeBase' element={<KnownledgeBase/>}/>  
            <Route path='/coins/:id' element={<CoinPage/>}/>   
        </Routes> 
        <Footer /> 
      </div>
    </BrowserRouter>
    </ThemeProvider>

  ); 

}

export default App;
