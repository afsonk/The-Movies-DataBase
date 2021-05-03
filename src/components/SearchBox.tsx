import React from 'react';
import {setFilmTitle} from "../context/ActionCreators";
import {useFilms} from "../context/GlobalState";

const SearchBox = () => {
    const {dispatch} = useFilms();

    const text = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setFilmTitle(text.current.value));
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                className={'search-box__input'}
                ref={text}
                type={'text'}
                name={'filmName'}
                placeholder={'Type to search...'}
            />
        </form>
    )
};

export default SearchBox;