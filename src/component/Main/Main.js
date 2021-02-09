import React from 'react';
import {
    MainWrapper,
    MainH2,
    MainProductWrapper,
    MainItem,
    ItemImage
} from './Main.elements';

const Main = ({data}) => {
    // const {id,name,prince,image}=data;
    return ( 
        <>
            {console.log(data)}
            <MainWrapper>
                <MainH2>
                    Product
                </MainH2>
                <MainProductWrapper>
                    {data.map(item=>(
                        <MainItem key={item.id}>
                            <ItemImage src={item.image}/>
                            {item.name}
                            {item.prince}
                            
                        </MainItem>
                    ))} 
                </MainProductWrapper>
            </MainWrapper>
        </>
     );
}
 
export default Main;