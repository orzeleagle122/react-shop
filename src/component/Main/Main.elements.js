import styled from 'styled-components';

export const MainWrapper=styled.div`
width:70%;
background: #e0e0e0;
padding:1rem;
 margin:0.5rem;
 border-radius:0.5rem;
`;

export const MainH2=styled.h2`

`;

export const MainProductWrapper=styled.div`
display:flex;
flex-wrap: wrap;
gap:10px;
justify-content:space-evenly;
`;

export const MainItem=styled.div`
 height:200px;
 width:200px;
 background: url(${({ image })=>( image ? image : 'red' )};);
`;

export const ItemImage=styled.img`
    width:100%;
    height:100%;
`;
