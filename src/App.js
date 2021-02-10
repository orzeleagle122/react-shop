import React, { useState } from 'react';
import {Header,Main,Basket} from './component/';
import GlobalStyle from './GlobalStyles/';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import {productList} from './Data/Products';


const MainWrapper=styled.div`
  display: flex;
  justify-content:flex-start;
  align-items: start;
`;

const App=()=> {
  const [cartItems,setCartItems]=useState([]);

  const handleOnAdd=(product)=>{
    const exist=cartItems.find(item=>item.id===product.id);
    if(exist){
      setCartItems(cartItems.map(item=>item.id===product.id?{...exist,qty:exist.qty+1}:item));
    } else {
      setCartItems([...cartItems,{...product,qty:1}]);
    }
  }

  const handleOnRemove=(product)=>{
    const exist=cartItems.find(item=>item.id===product.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter(item=>item.id!==product.id));
    } else {
      setCartItems(cartItems.map(item=>item.id===product.id?{...exist,qty:exist.qty-1}:item))
    }
  }

  const {product}=productList;
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Header countCardItems={cartItems.length}/>
      <MainWrapper>
        <Main data={product} onAdd={handleOnAdd}/>
        <Basket cartItems={cartItems} onAdd={handleOnAdd} onRemove={handleOnRemove}/>
        {console.log(cartItems)}
      </MainWrapper>
    </Router>
    </>
  );
}

export default App;
