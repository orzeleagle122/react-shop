import styled from 'styled-components';

export const BasketWrapper=styled.div`
background: #e0e0e0;
padding:1rem;
border-radius:0.5rem;
margin:0.5rem;
width:30%;
padding-bottom:50px;
`;

export const BasketName=styled.h2`

`;

export const ButtonAdd=styled.button`
    background-color:#40c0f0;
    width:1.5rem;
    margin-right:3px;
`;

export const ButtonRemove=styled.button`
    background-color:#f04040;
    width:1.5rem;
    margin-left:3px;
`;

export const CartItemWrapper=styled.div`
display:flex;
justify-content: flex-start;
border: 1px dashed black;
padding: 10px 20px;
margin-bottom:5px;
flex-wrap:wrap;

`;

export const CartItemName=styled.div`
font-size:18px;
font-weight:700;
`;

export const CartItemPrinceButton=styled.div`
    display:flex;
    margin-left:auto;
`;

export const CartItemButton=styled.div`

`;

export const CartItemPrince=styled.div`
margin-left:20px;
min-width: 100px;
display:flex;
justify-content:flex-end;
`;

export const SummaryWrapper=styled.div`

`;

export const SummaryContent=styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const SummaryName=styled.div`
padding-left:10px;
`;

export const SummaryPrice=styled.div`
    margin-left:auto;
`;

export const CheckoutButton=styled.button`
    width:100%;
    border-radius:0.5rem;
    background:#f0c040;
    cursor:pointer;
`;


