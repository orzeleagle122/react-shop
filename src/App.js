import React from 'react';
import {Header,Main,Basket} from './component/';
import GlobalStyle from './GlobalStyles/';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import {productList} from './Data/Products';


const MainWrapper=styled.div`
  display: flex;
  justify-content:flex-start;
`;

const App=()=> {
  const {product}=productList;
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Header/>
      <MainWrapper>
        <Main data={product}/>
        <Basket/>
      </MainWrapper>
    </Router>
    </>
  );
}

export default App;
