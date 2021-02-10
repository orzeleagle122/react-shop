import React from 'react';
import {
    HeaderWrapper,
    HeaderLogoLink,
    HeaderLink,
    HeaderH1,
    HeaderCart,
    HeaderSingIn,
    HeaderInfoWrapper,
    ButtonBadge
} from './Header.elements';

const Header = ({countCardItems}) => {
    return ( 
        <>
            <HeaderWrapper>
                <HeaderLogoLink>
                    <HeaderLink to='/'>
                        <HeaderH1>
                            Shoping Cart
                        </HeaderH1>
                    </HeaderLink>
                </HeaderLogoLink>
                <HeaderInfoWrapper>
                    <HeaderCart to='/'>
                        Cart {' '} {countCardItems?(
                            <ButtonBadge>
                                {countCardItems}
                            </ButtonBadge>
                        ):(
                            <>{' '}</>
                        )}
                    </HeaderCart>
                    <HeaderSingIn to='/'>
                        Sign In
                    </HeaderSingIn>
                </HeaderInfoWrapper>
            </HeaderWrapper>
        </>
     );
}
 
export default Header;