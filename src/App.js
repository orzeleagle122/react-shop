import React from 'react';
import {Header,Main,Basket} from './component/';
import GlobalStyle from './GlobalStyles/';
import {BrowserRouter as Router} from 'react-router-dom';

const App=()=> {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Basket/>
    </Router>
    </>
  );
}

export default App;
