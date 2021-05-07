import React from "react";
import {useParams} from "react-router-dom";
import {FilmsApi} from "../api/api";
import {useFilms} from "../context/GlobalState";
import {clearMovieDetail, setMovieDetail} from "../context/ActionCreators";
import {api} from "../types/types";
import PlayBtn from "./PlayBtn";
import AddToFavBtn from "./AddToFavBtn";


const MovieDetail: React.FC = () => {
    const {state, dispatch} = useFilms();
    const {movieId} = useParams<{ movieId: string }>();


    if (!movieId) {
        dispatch(clearMovieDetail())
    }

    const {movie} = state;

    React.useEffect(() => {
        FilmsApi.getMovieById(movieId)
            .then(res => dispatch(setMovieDetail(res)));
    }, [movieId]);

    React.useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])

    console.log(new Date(movie?.release_date!).getFullYear());

    return (
        <main
            className={'movie__background'}
            style={{backgroundImage: `url(${api.bigImg}${movie?.backdrop_path})`}}
        >
            <div className={'movie__info'}>
                <h1 className={'movie__title'}>{movie?.title}</h1>
                <p className={'movie__overview'}>{movie?.overview}</p>
                <div className={'genres-list'}>
                    {movie?.genres.map(item => {
                        return <span className={'genre'} key={item.id}>{item.name}</span>
                    })}
                </div>
                <div className={'movie__actions'}>
                    <PlayBtn/>
                    <AddToFavBtn/>
                </div>
            </div>

        </main>
    );
}

export default MovieDetail;