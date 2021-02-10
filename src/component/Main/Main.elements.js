import styled from 'styled-components';

export const MainWrapper=styled.div`
width:70%;
background: #e0e0e0;
padding:1rem;
 margin:0.5rem;
 border-radius:0.5rem;
 padding-bottom: 100px;
`;

export const MainH2=styled.h2`

`;

export const MainProductWrapper=styled.div`
display:flex;
flex-wrap: wrap;
gap:10px;
justify-content:flex-start;

`;

export const MainItem=styled.div`
 max-width:200px;
 margin-bottom:20px;
 margin-right:10px;
 flex:1;
`;

export const ItemImage=styled.img`
    width:200px;
    /* height:80%; */
    height:200px;
    object-fit: cover;
`;

export const BuyButton=styled.button`
    width:100%;
    max-width:200px;
    border-radius:0.5rem;
    background:#f0c040;
    cursor:pointer;
`;

export const ItemNameH3=styled.h3`
margin-bottom:2px;
margin-top:5px;
`;

export const ItemPrinceSpan=styled.span`
    display:block
`;