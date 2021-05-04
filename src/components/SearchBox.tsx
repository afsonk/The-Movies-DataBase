import React from 'react';
import {setFilmTitle} from "../context/ActionCreators";
import {useFilms} from "../context/GlobalState";

const SearchBox = () => {
    const {state, dispatch} = useFilms();

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        dispatch(setFilmTitle(e.currentTarget.value));
    }

    return(
        <div className={'search__form'}>
            <input
                className={'search-box__input'}
                value={state.title}
                onChange={handleChange}
                type={'text'}
                name={'filmName'}
                placeholder={'Type to search...'}
            />
        </div>
    )
};

export default SearchBox;