import React from 'react';
import {
    BasketWrapper,
    BasketName,
    ButtonAdd,
    ButtonRemove,
    CartItemWrapper,
    CartItemName,
    CartItemPrinceButton,
    CartItemButton,
    CartItemPrince,
    SummaryWrapper,
    SummaryContent,
    SummaryName,
    SummaryPrice,
    CheckoutButton
} from './Basket.elements';

const Basket = ({cartItems,onAdd,onRemove}) => {

    const itemsPrice=cartItems.reduce((a,c)=>a+c.prince*c.qty,0);
    const taxPrince=itemsPrice*0.23;
    const shippingPrice=itemsPrice>200?0:50; //$200 shipping free else $50
    const totalPrice=itemsPrice+taxPrince+shippingPrice;

    return ( 
        <>
            <BasketWrapper>
                <BasketName>
                    Cart Items
                </BasketName>
                {cartItems.length===0&&<>Cart is empty</>}
                {cartItems.map(item=>(
                    <CartItemWrapper key={item.id}>
                        <CartItemName>
                          {item.name}  
                        </CartItemName>
                        <CartItemPrinceButton>
                            <CartItemButton>
                                <ButtonAdd onClick={()=>onAdd(item)}>+</ButtonAdd> 
                                <ButtonRemove onClick={()=>onRemove(item)}>-</ButtonRemove>   
                            </CartItemButton>
                            <CartItemPrince>
                              {item.qty} x ${item.prince.toFixed(2)}  
                            </CartItemPrince>                            
                        </CartItemPrinceButton>
                    </CartItemWrapper>
                ))}
                {cartItems.length!==0&&(
                    <SummaryWrapper>
                        <hr/>
                        <SummaryContent>
                            <SummaryName>
                                Item Price
                            </SummaryName>
                            <SummaryPrice>
                                ${itemsPrice.toFixed(2)}
                            </SummaryPrice>
                        </SummaryContent>
                        <SummaryContent>
                            <SummaryName>
                                Tax Price
                            </SummaryName>
                            <SummaryPrice>
                                ${taxPrince.toFixed(2)}   
                            </SummaryPrice>
                        </SummaryContent>
                        <SummaryContent>
                            <SummaryName>
                                Shipping Price
                            </SummaryName>
                            <SummaryPrice>
                                ${shippingPrice.toFixed(2)}
                            </SummaryPrice>
                        </SummaryContent>
                        <SummaryContent>
                            <SummaryName>
                                <strong>Total Price</strong>
                            </SummaryName>
                            <SummaryPrice>
                            <strong>${totalPrice.toFixed(2)}</strong>
                            </SummaryPrice>
                        </SummaryContent>
                        <hr/>
                        <CheckoutButton onClick={()=>alert("kiedyś dopiszę :)")}>
                            Checkout
                        </CheckoutButton>
                    </SummaryWrapper>
                )}
            </BasketWrapper>
        </>
     );
}
 
export default Basket;