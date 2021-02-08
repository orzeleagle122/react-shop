import React from 'react';
import {
    HeaderWrapper,
    HeaderLogoLink,
    HeaderLink,
    HeaderH1,
    HeaderCard,
    HeaderSingIn
} from './Header.elements';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <>
            <HeaderWrapper>
                <HeaderLogoLink>
                    <HeaderLink to="/dupa">
                        <HeaderH1>
                            Shoping Card
                        </HeaderH1>
                    </HeaderLink>
                </HeaderLogoLink>
                <HeaderCard>
                    Card
                </HeaderCard>
                <HeaderSingIn>
                    Sign In
                </HeaderSingIn>
            </HeaderWrapper>
        </>
     );
}
 
export default Header;