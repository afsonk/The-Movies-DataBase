import React from "react";
import {NavLink, Route} from "react-router-dom";
import fav from "../../assets/img/star.svg";
import {useFilms} from "../../context/GlobalState";
import {toggleSearchBar} from "../../context/ActionCreators";
import SearchBtn from "../SearchBtn";


const HeaderActions = () => {

    const {state, dispatch} = useFilms();

    const handleSearchClick = (): void => {
        dispatch(toggleSearchBar());
    }
    return (
        <div className={'header__actions'}>
            <Route exact path={'/'}>
                {!state.isSearching && <SearchBtn handleSearchClick={handleSearchClick}/>}
            </Route>
            <NavLink
                to={'/watchList'}
                className={'header__favourite'}
            >
                <img src={fav} alt="favourites"/>
                <span>Favourites</span>
            </NavLink>

        </div>
    )
}

export default HeaderActions;