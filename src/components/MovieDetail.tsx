import React from "react";
import {useParams} from "react-router-dom";
import {FilmsApi} from "../api/api";
import {useFilms} from "../context/GlobalState";
import {clearMovieDetail, setMovieDetail, setMovieTrailer} from "../context/ActionCreators";
import {api} from "../types/types";
import PlayBtn from "./PlayBtn";
import AddToFavBtn from "./AddToFavBtn";
import Trailer from "./Trailer";


const MovieDetail: React.FC = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const {state, dispatch} = useFilms();
    const {movieId} = useParams<{ movieId: string }>();
    const opts = {
        height: '80%',
        width: '90%',
        playerVars: {
            autoplay: 1,
        },
    };

    const {movie, trailerId} = state;

    const handleOutsideClick = (e: any) => {
        if(e.target.className === 'trailer__container'){
            setIsPlaying(false);
        }
    }

    React.useEffect(() => {
        FilmsApi.getMovieById(movieId)
            .then(res => dispatch(setMovieDetail(res)));
        FilmsApi.getMovieTrailer(movieId)
            .then(res => dispatch(setMovieTrailer(res.results[0]?.key)));
    }, [movieId]);

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.addEventListener('click', handleOutsideClick);
        return () => {
            dispatch(clearMovieDetail())
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleOutsideClick)}
    }, []);


    return (
        <main
            className={'movie__background'}
            style={{backgroundImage: `url(${api.bigImg}${movie?.backdrop_path})`}}
        >
            <div className={'movie__info'}>
                <h1 className={'movie__title'}>{movie?.title} <span className={'movie__date'}>{movie?.release_date && new Date(movie?.release_date!).getFullYear()}</span></h1>
                <p className={'movie__overview'}>{movie?.overview}</p>
                <div className={'genres-list'}>
                    {movie?.genres.map(item => {
                        return <span className={'genre'} key={item.id}>{item.name}</span>
                    })}
                </div>
                <div className={'movie__actions'}>
                    {trailerId && <PlayBtn onTrailerPlay={() => setIsPlaying(true)}/>}
                    <AddToFavBtn/>
                </div>
            </div>
            {isPlaying && <Trailer opts={opts} trailerId={trailerId!}/>}
        </main>
    );
}

export default MovieDetail;
//
// <div>{movie?.production_companies.map(item => <img style={{height:'100px'}} src={api.smallImg + item.logo_path} alt=""/>)}</div>
