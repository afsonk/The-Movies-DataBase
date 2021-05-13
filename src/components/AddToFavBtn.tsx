import React from "react";
import useLocalStorage from "../LocalStorage/useLocalStorage";
import {useFilms} from "../context/GlobalState";
import {SingleMovieResponseType} from "../types/types";
import {useParams} from "react-router-dom";



const AddToFavBtn = () => {
    const [favourites, setFavourites] = React.useState<Array<SingleMovieResponseType | any>>([]);
    const [active, setActive] = React.useState<boolean>(false);
    const [storage, setStorage] = useLocalStorage('films');

    const {state} = useFilms();
    const {movieId} = useParams<{ movieId: string }>();

    const handleClick = ():void => {
        if(!active){
            const movieList = [...favourites, state.movie];
            setFavourites(movieList);
            setActive(prev => !prev);
            setStorage(movieList);
        }
        else {
            const movieList = favourites.filter(item => {
                return item.id !== state.movie?.id;
            });
            setFavourites(movieList);
            setActive(prev => !prev);
            setStorage(movieList);
        }
    }

    React.useEffect(() => {
        Array.isArray(storage) && setFavourites([...storage]);
    },[storage])

    React.useEffect(() => {
            favourites.forEach(item => {
                Number(movieId) === item?.id && setActive(prevState => !prevState);
            });
    },[favourites]);

    return (
        <button className={`addToFav__btn ${active ? 'active' : ''}`}
                onClick={handleClick}
                title={active
                    ? 'Remove film from favourites'
                    : 'Add film to favourites'
                }>
            <span></span>
            <span></span>
        </button>
    )
};

export default AddToFavBtn;