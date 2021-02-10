import React from 'react';
import {
    MainWrapper,
    MainH2,
    MainProductWrapper,
    MainItem,
    ItemImage,
    BuyButton,
    ItemNameH3,
    ItemPrinceSpan
} from './Main.elements';

const Main = ({data,onAdd}) => {
    // const {id,name,prince,image}=data;
    return ( 
        <>
            {/* {console.log(data)} */}
            <MainWrapper>
                <MainH2>
                    Product
                </MainH2>
                <MainProductWrapper>
                    {data.map(item=>(
                        <MainItem key={item.id}>
                            <ItemImage src={item.image}/>
                            <ItemNameH3>
                                {item.name}
                            </ItemNameH3>
                            <ItemPrinceSpan>
                                ${item.prince}
                            </ItemPrinceSpan>                            
                            <BuyButton onClick={()=>onAdd(item)}>
                                Add to cart
                            </BuyButton>
                        </MainItem>
                    ))} 
                </MainProductWrapper>
            </MainWrapper>
        </>
     );
}
 
export default Main;