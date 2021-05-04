import React from "react";
import {NavLink, Route} from "react-router-dom";
import fav from "../../assets/img/star.svg";
import search from "../../assets/img/search.svg";


const HeaderActions = () => {
    return (
        <div className={'header__actions'}>
            <Route exact path={'/'}>
                <button className={'search__btn'}>
                    <img src={search} alt="search"/>
                    <span>Search</span>
                </button>
            </Route>
            <NavLink
                to={'/watchList'}
                className={'header__favourite'}
            >
                <img src={fav} alt="favourites"/>
                <span>Watch List</span>
            </NavLink>

        </div>
    )
}

export default HeaderActions;