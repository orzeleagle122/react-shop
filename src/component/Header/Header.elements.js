import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderWrapper=styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background:#e0e0e0;
 padding:1rem;
 margin:0.5rem;
 border-radius:0.5rem;
 height:50px;
`;

export const HeaderLogoLink=styled.div`
    flex:2;
`;

export const HeaderLink=styled(Link)`
 text-decoration:none;
`;

export const HeaderH1=styled.h1`
    margin:0.5rem 0;
    font-size:1.5rem;
`;

export const HeaderCard=styled(Link)`
 text-decoration:none;
 margin-right:5px;
`;

export const HeaderSingIn=styled(Link)`
 text-decoration:none;
 margin-right:5px;
`;

export const HeaderInfoWrapper=styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`;
