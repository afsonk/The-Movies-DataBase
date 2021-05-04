import React from "react";
import {
    NavLink
} from "react-router-dom";
import '../../styles.scss';

import logo from '../../assets/img/blue_square.svg';
import Container from "../Container";
import {useFilms} from "../../context/GlobalState";
import {clearMovieDetail} from "../../context/ActionCreators";
import HeaderActions from "./HeaderActions";

const Header = () => {
    const {dispatch} = useFilms();
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__inner'}>
                    <NavLink
                        to={'/'}
                        onClick={() => dispatch(clearMovieDetail())}
                    >
                        <img className={'header__logo'} src={logo} alt="logo"/>
                    </NavLink>
                    <HeaderActions/>
                </div>
            </Container>
        </header>

    );
}
export default Header;