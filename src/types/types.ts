import {
    SET_FILMS_IN_STATE,
    SET_FILM_TITLE,
    SET_MOVIE_DETAILS,
    CLEAR_MOVIE_DETAILS,
    TOGGLE_IS_FETCHING, TOGGLE_SEARCH_BAR
} from "../context/Constans";
import React, {Dispatch} from "react";


//films array response
const obj = {
    adult: false,
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    genre_ids: [18],
    id: 550,
    original_language: "en",
    original_title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    popularity: 37.668,
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date: "1999-10-15",
    title: "Fight Club",
    video: false,
    vote_average: 8.4,
    vote_count: 21618,
}

const singleMovie = {
    adult: false,
    backdrop_path: "/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg",
    belongs_to_collection: null,
    budget: 200000000,
    genres: [{id: 18, name: "Drama"}],
    homepage: "",
    id: 597,
    imdb_id: "tt0120338",
    original_language: "en",
    original_title: "Titanic",
    overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. " +
        "A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    popularity: 81.808,
    poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    production_companies: [
        {id: 4, logo_path: "/fycMZt242LVjagMByZOLUGbCvv3.png", name: "Paramount", origin_country: "US"},
    ],
    production_countries: [{iso_3166_1: "US", name: "United States of America"},],
    release_date: "1997-11-18",
    revenue: 2187463944,
    runtime: 194,
    spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"},],
    status: "Released",
    tagline: "Nothing on Earth could come between them.",
    title: "Titanic",
    video: false,
    vote_average: 7.9,
    vote_count: 19107,
}


export type GlobalStateType = {
    title: string,
    films: ResponseType[],
    movie: SingleMovieResponseType | null,
    isFetching: boolean,
    isSearching: boolean
}

export type SingleMovieResponseType = typeof singleMovie;

export type ResponseType = typeof obj;

export type ApiType = {
    page: number,
    results: Array<ResponseType>,
    total_results: number,
    total_page: number
}

export enum api{
    "apiKey" = "02975dd7fd4ed626e2a5a7e13f1eae70",
    "smallImg" = "http://image.tmdb.org/t/p/w300",
    "mediumImg" = "https://image.tmdb.org/t/p/w500",
    "bigImg" = "http://image.tmdb.org/t/p/original",
    "trailer" = "https://www.youtube.com/watch?v="
}



export interface ISetFilmTitle {
    type: typeof SET_FILM_TITLE,
    text: string
}

export interface ISetFilmsInState {
    type: typeof SET_FILMS_IN_STATE,
    films: ResponseType[]
}

export interface ISetMovieDetails{
    type: typeof SET_MOVIE_DETAILS,
    film: SingleMovieResponseType
}

export interface IClearMovieDetails{
    type: typeof CLEAR_MOVIE_DETAILS
}

export interface IToggleIsFetching{
    type: typeof TOGGLE_IS_FETCHING,
    payload: boolean
}

export interface IToggleSearchBar{
    type: typeof TOGGLE_SEARCH_BAR,
}

export type ChildrenProps = {
    children: React.ReactNode
}

export type ContextState = {
    state: GlobalStateType,
    dispatch: Dispatch<GlobalActionTypes>
}

export type GlobalActionTypes = ISetFilmTitle
    | ISetFilmsInState
    | ISetMovieDetails
    | IClearMovieDetails
    | IToggleIsFetching
    | IToggleSearchBar;