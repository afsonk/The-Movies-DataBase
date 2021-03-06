import {
    CLEAR_MOVIE_DETAILS,
    SET_ACTIVE_GENRE,
    SET_ACTIVE_PAGE,
    SET_FAVORITES,
    SET_FILM_TITLE,
    SET_FILMS_IN_STATE,
    SET_MOVIE_DETAILS,
    SET_MOVIE_TRAILER,
    TOGGLE_SEARCH_BAR
} from "./Constans"
import {
    ApiType,
    IClearMovieDetails,
    ISetActiveGenre,
    ISetActivePage,
    ISetFavoriteFilms,
    ISetFilmsInState,
    ISetFilmTitle,
    ISetMovieDetails,
    ISetMovieTrailer,
    IToggleSearchBar, ResponseType,
    SingleMovieResponseType,
} from "../types/types"


export const setFilmTitle = (text: string): ISetFilmTitle => ({
    type: SET_FILM_TITLE,
    text
});

export const setFilmsInState = ({...films}: ApiType | {}): ISetFilmsInState => ({
    type: SET_FILMS_IN_STATE,
    films
});

export const setMovieDetail = (film: SingleMovieResponseType): ISetMovieDetails => ({
    type: SET_MOVIE_DETAILS,
    film
});

export const clearMovieDetail = (): IClearMovieDetails => ({
    type: CLEAR_MOVIE_DETAILS
});

export const toggleSearchBar = (): IToggleSearchBar => ({
    type: TOGGLE_SEARCH_BAR,
})

export const setActivePage = (payload: number): ISetActivePage => ({
    type: SET_ACTIVE_PAGE,
    payload
});

export const setMovieTrailer = (payload: string | null): ISetMovieTrailer => ({
    type: SET_MOVIE_TRAILER,
    payload
});

export const setActiveGenre = (payload: null | number): ISetActiveGenre => ({
    type: SET_ACTIVE_GENRE,
    payload
})

export const setFavoriteMovie = (payload: Array<ResponseType> | null): ISetFavoriteFilms => ({
    type: SET_FAVORITES,
    payload
})
