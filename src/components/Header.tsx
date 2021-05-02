import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";

import '../styles.scss'
import logo from '../assets/img/blue_square.svg';
import Container from "./Container";

const Header = () => {
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__inner'}>
                    <Link to={'/'}><img className={'header__logo'} src={logo} alt="logo"/></Link>
                    <NavLink to={'/watchList'} className={'header__favourite'}>Watch List</NavLink>
                </div>
            </Container>
        </header>

    );
}
export default Header;