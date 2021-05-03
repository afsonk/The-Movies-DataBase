import {CLEAR_MOVIE_DETAILS, SET_FILM_TITLE, SET_FILMS_IN_STATE, SET_MOVIE_DETAILS} from "./Constans";
import {
    IClearMovieDetails,
    ISetFilmsInState,
    ISetFilmTitle,
    ISetMovieDetails,
    ResponseType,
    SingleMovieResponseType
} from "../types/types";


export const setFilmTitle = (text: string): ISetFilmTitle => ({
    type: SET_FILM_TITLE,
    text
})

export const setFilmsInState = (films: ResponseType[]): ISetFilmsInState => ({
    type: SET_FILMS_IN_STATE,
    films
})

export const setMovieDetail = (film: SingleMovieResponseType): ISetMovieDetails => ({
    type: SET_MOVIE_DETAILS,
    film
});

export const clearMovieDetail = (): IClearMovieDetails => ({
    type: CLEAR_MOVIE_DETAILS
})