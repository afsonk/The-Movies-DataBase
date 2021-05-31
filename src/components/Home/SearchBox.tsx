import React, {Dispatch} from 'react';
import {setActiveGenre, setActivePage, setFilmTitle, toggleSearchBar} from "../../context/ActionCreators"
import {GlobalActionTypes} from "../../types/types";

type Props = {
    isSearching: boolean,
    dispatch: Dispatch<GlobalActionTypes>,
    title: string
}

const SearchBox: React.FC<Props> = ({isSearching, dispatch, title}) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        dispatch(setActiveGenre(null));
        dispatch(setActivePage(1));
        dispatch(setFilmTitle(e.currentTarget.value));
    }

    const handleBlur = (): void => {
        dispatch(toggleSearchBar());
    }

    React.useEffect(() => {
        window.scroll(0,0);
    },[])

    return(
        <div className={`search__form ${isSearching ? 'active' : ''}`}>
                    <input
                        className={'search-box__input'}
                        type={'text'}
                        name={'filmName'}
                        placeholder={'Type to search...'}
                        autoFocus={true}
                        value={title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
    )
};

export default SearchBox;