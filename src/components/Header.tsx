import React from "react";
import {
    NavLink, Route, useParams
} from "react-router-dom";

import '../styles.scss'
import logo from '../assets/img/blue_square.svg';
import Container from "./Container";
import SearchBox from "./SearchBox";
import {useFilms} from "../context/GlobalState";
import { clearMovieDetail } from "../context/ActionCreators";

const Header = () => {
    const {dispatch} = useFilms();

    return (
        <header className={'header'}>
            <Container>
                <div className={'header__inner'}>
                    <NavLink to={'/'} onClick={() => dispatch(clearMovieDetail())}><img className={'header__logo'} src={logo} alt="logo"/></NavLink>
                    <Route exact path={'/'} >
                        <SearchBox/>
                    </Route>
                    <NavLink to={'/watchList'} className={'header__favourite'}>Watch List</NavLink>
                </div>
            </Container>
        </header>

    );
}
export default Header;