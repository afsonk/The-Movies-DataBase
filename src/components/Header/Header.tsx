import React from "react";
import {
    NavLink
} from "react-router-dom";
import './styles.scss';

import logo from '../../assets/img/blue_square.svg';
import {Container} from "../shared";
import HeaderActions from "./HeaderActions";


const Header = () => {
    const [hide, setHide] = React.useState<boolean>(false);

    const prevPosition = React.useRef(window.pageYOffset) as React.MutableRefObject<number>;

    const onScroll = (): void => {
        const currentPos = window.pageYOffset;
        if(prevPosition.current > currentPos){
            setHide(false);
        }else if(document.body.style.overflow === 'hidden'){
            setHide(false);
        }
        else {
            setHide(true);
        }
        prevPosition.current = currentPos;
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll' , onScroll);
    },[prevPosition.current])

    return (
        <header className={`header ${hide ? 'active' : ''}`}>
            <Container>
                <div className={'header__inner'}>
                    <NavLink to={'/'}>
                        <img className={'header__logo'} src={logo} alt="logo"/>
                    </NavLink>
                    <HeaderActions/>
                </div>
            </Container>
        </header>

    );
}
export default Header;
