import React from "react";
import {NavLink, Route} from "react-router-dom";
import {useFilms} from "../../context/FilmsState";
import {toggleSearchBar} from "../../context/ActionCreators";
import SearchBtn from "./SearchBtn";
import FavoriteBtn from "./FavoriteBtn";
import AuthBtn from "./AuthBtn"


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
                to={'/favorites'}
                className={'header__favourite'}
                activeClassName={'active'}
            >
                <FavoriteBtn/>
            </NavLink>
            <AuthBtn/>
        </div>
    )
}

export default HeaderActions;