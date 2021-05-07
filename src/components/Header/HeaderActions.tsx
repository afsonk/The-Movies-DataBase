import React from "react";
import {NavLink, Route} from "react-router-dom";
import {useFilms} from "../../context/GlobalState";
import {toggleSearchBar} from "../../context/ActionCreators";
import SearchBtn from "../SearchBtn";
import FavouriteBtn from "../FavouriteBtn";


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
                to={'/favourites'}
                className={'header__favourite'}
                activeClassName={'active'}
            >
                <FavouriteBtn/>
            </NavLink>

        </div>
    )
}

export default HeaderActions;