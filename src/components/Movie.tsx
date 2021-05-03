import React from "react";
import { useParams } from "react-router-dom";
import {FilmsApi} from "../api/api";
import {useFilms} from "../context/GlobalState";
import {clearMovieDetail, setMovieDetail} from "../context/ActionCreators";
import { api } from "../types/types";


const MovieDetail = () => {
    const {state, dispatch} = useFilms();
    const {movieId}:{movieId: string} = useParams();


    if (!movieId){
        dispatch(clearMovieDetail())
    }

    const {movie} = state;

    React.useEffect(() => {
        FilmsApi.getMovieById(movieId)
            .then(res => dispatch(setMovieDetail(res)));
    },[movieId]);


    return (
        <main style={{minHeight:'100vh', display: 'flex', justifyContent: "center"}}>
            <img
                className={'movie__background'}
                src={`${api.bigImg}${movie?.backdrop_path 
                    ? movie?.backdrop_path 
                    : movie?.poster_path}`} alt={movie?.title}/>
        </main>
    );
}

export default MovieDetail;