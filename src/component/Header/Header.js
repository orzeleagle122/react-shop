import React from 'react';
import {
    HeaderWrapper,
    HeaderLogoLink,
    HeaderLink,
    HeaderH1,
    HeaderCard,
    HeaderSingIn,
    HeaderInfoWrapper
} from './Header.elements';

const Header = () => {
    return ( 
        <>
            <HeaderWrapper>
                <HeaderLogoLink>
                    <HeaderLink to='/dupa'>
                        <HeaderH1>
                            Shoping Card
                        </HeaderH1>
                    </HeaderLink>
                </HeaderLogoLink>
                <HeaderInfoWrapper>
                    <HeaderCard to='/'>
                        Card
                    </HeaderCard>
                    <HeaderSingIn to='/'>
                        Sign In
                    </HeaderSingIn>
                </HeaderInfoWrapper>
            </HeaderWrapper>
        </>
     );
}
 
export default Header;